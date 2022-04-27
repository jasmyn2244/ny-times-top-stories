import React from 'react'
import '../Styles/Loader.scss'
import SectionButtons from './SectionButtons'

const Loader = () => {
  return (
    <>
      <SectionButtons />
      <div className='loader-container'>
        <p className='loading-text'>Loading</p>
        <div className="loading-dots">
          <div className="loading-dots--dot"></div>
          <div className="loading-dots--dot"></div>
          <div className="loading-dots--dot"></div>
        </div>
      </div>
    </>
  )
}

export default Loader