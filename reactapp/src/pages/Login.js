import React from 'react'

const Login = () => {
		return (
			<div style={styles.login}>
				<h2>Login</h2>
				<h3>To login with github please click on the link below</h3>
				<a href="https://github.com/login/oauth/authorize?client_id=6ff711f9277a83f1c3b7">Login With Github</a>
			</div>
		)
}

export default Login

const styles = {
	login: {
		textAlign: 'center'
	}
}