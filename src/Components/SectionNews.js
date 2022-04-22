import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getArticlesByCategory } from '../api-calls'
import Card from './Card'


const SectionNews = () => {
  const section = useParams()
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    getArticlesByCategory(section.section)
      .then(data => {
        console.log(data)
        setArticles(data)
      })
  }, [section])

  let articleCards = []

  if (articles) {
    articleCards = articles.results.map(article => {
      if (article.multimedia) {
        return (
          <Card
            key={article.published_date}
            section={section.section}
            img={article.multimedia[0]}
            title={article.title}
            publishDate={article.published_date}
          />
        )
      }
    })
  }



  return (
    <div className='card-container'>
      {console.log(section)}
      {articles && articleCards}
      {/* return a loader if there is no article availible yet if it's not defineed */}
    </div>
  )
}


export default SectionNews