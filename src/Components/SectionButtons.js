import React from 'react'
import { Link } from 'react-router-dom'

const SectionButtons = () => {
  return (
    <div>
      <Link to='/section/Business'>
        < button > Business</button>
      </Link >
      <Link to='/section/Politics'>
        <button>Politics</button>
      </Link>
      <Link to='/section/Science'>
        <button>Science</button>
      </Link>
      <Link to='/section/Technology'>
        <button>Technology</button>
      </Link>
      <Link to='/section/World'>
        <button>World</button>
      </Link >
    </div >
  )
}

export default SectionButtons