import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getArticlesByCategory } from '../api-calls'
import Card from './Card'
import { ArticlesContext } from '../Context/ArticlesContext'


const CardContainer = () => {
  const section = useParams()
  const { articlesValue } = useContext(ArticlesContext)
  const { articles, setArticles } = articlesValue

  useEffect(() => {
    getArticlesByCategory(section.section)
      .then(data => {
        console.log('data in useEffect', data)
        setArticles(data.results)
      })
  }, [section])

  let articleCards = []

  if (articles.length > 0) {
    articleCards = articles.map(article => {
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
      {console.log('articles', articles)}
      {console.log('setArticles', setArticles)}
      {articlesValue && articleCards}
      {/* return a loader if there is no article availible yet if it's not defineed */}
    </div>
  )
}


export default CardContainer