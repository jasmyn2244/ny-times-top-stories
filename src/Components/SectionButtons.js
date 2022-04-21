import React from 'react'
import { Link } from 'react-router-dom'

const SectionButtons = () => {
  return (
    <div>
      <Link to='/section/Business'>
        < button > Business</button>
      </Link >
      <Link to='/section/politics'>
        <button>Politics</button>
      </Link>
      <Link to='/section/science'>
        <button>Science</button>
      </Link>
      <Link to='/section/technology'>
        <button>Technology</button>
      </Link>
      <Link to='/section/world'>
        <button>World</button>
      </Link >
    </div >
  )
}

export default SectionButtons