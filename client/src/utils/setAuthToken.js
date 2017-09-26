export default function setAuthToken(jwt) {
	console.log('Im in the setAuthToken function')
  localStorage.setItem('jwt', JSON.stringify(jwt))
}