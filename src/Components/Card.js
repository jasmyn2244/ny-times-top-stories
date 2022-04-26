import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Card.scss'

const Card = ({ section, img, title, publishDate }) => {
  let [year, month, day] = publishDate.split('-')
  day = day.substring(0, 2)
  let date = [month, day, year].join('.')

  return (
    <Link to={`/${section}/details/${title}`}
      style={{ textDecoration: 'none' }} >
      <div className='card'>
        <div className='card-details'>
          <p className='title'>{title}</p>
          <div className='card-date-category'>
            <p className='date'>{`${date}`}</p>
            <p>{section}</p>
          </div>
        </div>
        <img className='card-image' src={img.url} alt={img.caption} />
      </div>
    </Link >
  )
}

export default Card