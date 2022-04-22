import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/SectionButtons.scss'

const SectionButtons = () => {
  return (
    <div className='section-button-container'>
      <Link to='/section/Business'>
        < button className='section-button business-button'> Business</button>
      </Link >
      <Link to='/section/Politics'>
        <button className='section-button politics-button'>Politics</button>
      </Link>
      <Link to='/section/Science'>
        <button className='section-button science-button'>Science</button>
      </Link>
      <Link to='/section/Technology'>
        <button className='section-button technology-button'>Technology</button>
      </Link>
      <Link to='/section/World'>
        <button className='section-button world-button'>World</button>
      </Link >
    </div >
  )
}

export default SectionButtons