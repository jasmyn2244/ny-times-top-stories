import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ section, img, title, publishDate }) => {
  let [year, month, day] = publishDate.split('-')
  day = day.substring(0, 2)
  let date = [month, day, year].join('.')

  console.log(date)
  return (
    <Link to={`/details/${title}`}>
      <div>
        <p>{title}</p>
        <p>{date}</p>
        <p>{section}</p>
        <img src={img.url} alt={img.caption} />
      </div>
    </Link>
  )
}

export default Card