import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Card.scss'


const Card = ({ section, img, title, publishedDate }) => {

  return (
    <Link to={`/${section}/details/${title}`}
      style={{ textDecoration: 'none' }} >
      <div className='card' data-cy='card'>
        <div className='card-details'>
          <p className='title' data-cy='title'>{title}</p>
          <div className='card-date-category'>
            <p className='date'>{publishedDate}</p>
            <p>{section}</p>
          </div>
        </div>
        <img className='card-image' src={img.url} alt={img.caption} />
      </div>
    </Link >
  )
}

export default Card