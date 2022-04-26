import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/SectionButtons.scss'

const SectionButtons = () => {
  return (
    <div className='section-button-container'>
      <Link to='/section/Business'>
        <div className='button-border-business'>
          <button className='section-button business-button'> Business</button>
        </div>
      </Link >
      <Link to='/section/Politics'>
        <div className='button-border-politics'>
          <button className='section-button politics-button'>Politics</button>
        </div>
      </Link>
      <Link to='/section/Science'>
        <div className='button-border-science'>
          <button className='section-button science-button'>Science</button>
        </div>
      </Link>
      <Link to='/section/Technology'>
        <div className='button-border-technology'>
          <button className='section-button technology-button'>Technology</button>
        </div>
      </Link>
      <Link to='/section/World'>
        <div className='button-border-world'>
          <button className='section-button world-button'>World</button>
        </div>
      </Link >
    </div >
  )
}

export default SectionButtons