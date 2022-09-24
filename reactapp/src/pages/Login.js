import React from 'react'

class Login extends React.Component
{
	render() {
		return (
			<div>
				<h1>Login</h1>
				<p>To login with github please click on the link below</p>
				<a href="https://github.com/login/oauth/authorize?client_id=6ff711f9277a83f1c3b7">Login With Github</a>
			</div>
		)
	}
}

export default Login