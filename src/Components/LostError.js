import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LostError.scss'

const LostError = () => {
  return (
    <div className='error-message'>
      <p>Looks like you're lost. The URL entered doesn't exist. Let's get you back home. </p>
      <Link to='/'>
        <button className='home-button'>Home</button>
      </Link>
    </div>
  )
}

export default LostError