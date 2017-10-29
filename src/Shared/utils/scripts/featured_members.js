const axios = require('axios')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(prompt) {
  const promise = new Promise((resolve, reject) => {
    rl.question(`${prompt}:\n`, function (input) {
      resolve(input)
    })
  })
  return promise
}

let allMembers
let selectedMembers = []

axios.get("https://localhost:3000/featured_members")
  .then((result) => {
    const promises = []
    const featuredMembers = result.data
    for(member of featuredMembers){
      promises.push(axios.delete(`https://localhost:3000/featured_members/${member.id}`))
    }
    return Promise.all(promises)
  }).then(() => {
    return axios.get("https://localhost:3000/members")
  }).then((response) => {

    allMembers = response.data
    for(let index in allMembers){
      const num = parseInt(index) + 1
      console.log(`${num}: ${allMembers[index].name}`)
    }

    return getUserInput("Enter the number of a member you wish to make featured")
  })
  .then((input) => {
    input = parseInt(input)
    selectedMembers.push(allMembers[input-1])
    console.log("You select " + allMembers[input-1].name);
    return getUserInput("Please select another")
  }).then((input) => {
    input = parseInt(input)
    selectedMembers.push(allMembers[input-1])
    console.log("You select " + allMembers[input-1].name);
    return getUserInput("Please select another")
  }).then((input) => {
    input = parseInt(input)
    selectedMembers.push(allMembers[input-1])
    console.log("You select " + allMembers[input-1].name);
    return selectedMembers
  }).then((selectedMembers) => {
    let promises = []
    let position = 1
    for(member of selectedMembers){
      const toPost = {id: member.id, position: position++}
      promises.push(axios.post("https://localhost:3000/featured_members", toPost))
    }
    return Promise.all(promises)
  }).then((result) => {
    console.log("Fetured members have been selected")
    process.exit()
  })
  .catch((error) => {
    console.log("error: ", error)
    process.exit()
  })
