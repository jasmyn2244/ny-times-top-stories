import React from 'react'
import '../Styles/Loader.scss'
import SectionButtons from './SectionButtons'

const Loader = () => {
  return (
    <>
      <SectionButtons />
      <div className='loader-container'>
        <p className='loading-text'>Loading</p>
        <div class="loading-dots">
          <div class="loading-dots--dot"></div>
          <div class="loading-dots--dot"></div>
          <div class="loading-dots--dot"></div>
        </div>
      </div>
    </>
  )
}

export default Loader