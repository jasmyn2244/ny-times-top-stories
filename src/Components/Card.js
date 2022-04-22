import React from 'react'

const Card = ({ section, img, title, publishDate }) => {
  let [year, month, day] = publishDate.split('-')
  day = day.substring(0, 2)
  let date = [month, day, year].join('.')
  console.log('image in card', img)

  console.log(date)
  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{section}</p>
      <img src={img.url} alt={img.caption} />
    </div>
  )
}

export default Card