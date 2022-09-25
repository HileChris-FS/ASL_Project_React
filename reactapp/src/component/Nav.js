import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Nav = props => {
return (
<nav style={styles.nav}>
	<StyledLink to="/">Home</StyledLink>
	{props.isLoggedIn && <StyledLink to="/logout">Logout</StyledLink>}
</nav>
)
}
export default Nav;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'center'
    }
}

const StyledLink = styled(Link)`
    font-size: 25px;
    color: #9E2B25;
    margin: 10px 20px;
    &:hover {
        color: #C6362F;
    }
    &.active {
        color: #D8605A;
    }
`