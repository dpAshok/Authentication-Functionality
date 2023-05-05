// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onLoginSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      onLoginSuccess(data.jwt_token)
    }
  }

  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login_container">
      <h1>Please Login</h1>
      <button onClick={onClickLogin} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
