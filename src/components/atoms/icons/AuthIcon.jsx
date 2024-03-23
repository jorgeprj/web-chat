import React from 'react'

const AuthIcon = ({ type }) => {
    if (type.toLowerCase() === 'google') return (<img src="../../src/assets/google.png" alt="" />)
}

export default AuthIcon