import React from 'react'
import '../Styles/Home.scss'
import SectionButtons from './SectionButtons'


const Home = () => {
  return (
    <>
      <SectionButtons />
      <div className='welcome-text'>
        <p>Select a news section that captures your interest to begin browsing news articles.</p>
      </div>
    </>
  )
}

export default Home 