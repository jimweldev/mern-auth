import React from 'react'
import { Link } from 'react-router-dom'

const HomeTemplate = ({ children }) => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
			{children}
		</div>
	)
}

export default HomeTemplate
