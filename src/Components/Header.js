import React from 'react'
import '../Styles/Header.scss'
import icon from '../Assets/news.png'


const Header = () => {
  return (
    <div className='header'>
      <img src={icon} alt='news icon' className='icon' data-cy='icon' />
      <h1 data-cy='heading'> New York Times Top Stories</h1>
    </div>
  )
}
export default Header