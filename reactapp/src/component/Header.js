import React from 'react'
import Navigation from "./Nav"



const Header = props => {
	console.log(props.token)
		return (
			<header>
				<div style={styles.headerStyle}>
					<h1 style={styles.h1}>Quizzes on Demand</h1>
					<Navigation isLoggedIn={props.token ? true : false} />
				</div>
			</header>
		);

}

export default Header;

const styles = {
    headerStyle: {
        backgroundColor: '#0B2027',
        marginBottom: '20px'
    },
    h1: {
        padding: '1rem 0',
        textAlign: 'center',
		fontSize: '6rem',
      	color: '#DFF0F6'
	}
}