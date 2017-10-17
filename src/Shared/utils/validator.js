
export function isStringValid(str){
  return (str !== null && str !== undefined && str.length > 0)
}

export function isMonetaryValueValid(value){

  if(value < 0) return false
  if(value === null || value === undefined) return false

  let decimals = value.toString().match(/\.\d+/)
  if(decimals !== null && decimals[0].length > 3) return false

  return true
}
