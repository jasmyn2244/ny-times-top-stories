import React from 'react'
import { Link } from 'react-router-dom'

const SectionButtons = () => {
  return (
    <div>
      <Link to='/business'>
        < button > Business</button>
      </Link >
      <Link to='/politics'>
        <button>Politics</button>
      </Link>
      <Link to='/science'>
        <button>Science</button>
      </Link>
      <Link to='/technology'>
        <button>Technology</button>
      </Link>
      <Link to='/world'>
        <button>World</button>
      </Link >
    </div >
  )
}

export default SectionButtons