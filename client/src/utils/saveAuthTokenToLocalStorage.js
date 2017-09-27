import setAuthToken from './setAuthToken'

export default function saveAuthTokenToLocalStorage(token) {
  localStorage.setItem('token', token)
  setAuthToken(token)
}