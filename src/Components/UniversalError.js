import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LostError.scss'

const UniversalError = () => {
  return (
    <div className='error-message'>
      <p>Looks like something went wrong. Start back at home and try again.</p>
      <Link to='/'>
        <button className='home-button'>Home</button>
      </Link>
    </div>
  )
}

export default UniversalError