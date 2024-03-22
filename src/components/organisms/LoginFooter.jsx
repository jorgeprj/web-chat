import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

	& a {
		text-decoration: none;
		color: black;
	}

	& a:hover{
		text-decoration: underline;
	}
`


const LoginFooter = () => {
	return (
		<Footer>
			<p>© PET-BCC UFSCar</p>
			<a href="#">Support</a>
			<a href="#">Terms</a>
			<a href="#">Privacy</a>
		</Footer>
	)
}

export default LoginFooter