import React from 'react'

import google from '../../../assets/google.png'

const AuthIcon = ({ type }) => {
    if (type.toLowerCase() === 'google') return (<img src={google} alt="Logo Google" />)
}

export default AuthIcon