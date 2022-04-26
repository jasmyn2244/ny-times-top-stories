import React from 'react'

const ErrorPage = () => {
  return (
    <div>
      <p>Looks like your lost. The URL entered doesn't exist. Lets get you back home. </p>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default ErrorPage