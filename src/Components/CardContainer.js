import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesByCategory } from '../api-calls'
import Card from './Card'
import { ArticlesContext } from '../Context/ArticlesContext'
import '../Styles/CardContainer.scss'
import SectionButtons from './SectionButtons'
import UniversalError from './UniversalError'


const CardContainer = () => {
  const section = useParams()
  const { articlesValue } = useContext(ArticlesContext)
  const { articles, setArticles } = articlesValue
  const [error, setError] = useState('')

  useEffect(() => {
    getArticlesByCategory(section.section)
      .then(cleanedData => setArticles(cleanedData))
      .catch(error => setError(error))
  }, [section])

  let articleCards = []

  if (articles.length > 0) {
    articleCards = articles.map((article, index) => {
      if (article.multimedia && article.title) {
        return (
          <Card
            key={index}
            section={section.section}
            img={article.multimedia[0]}
            title={article.title}
            publishedDate={article.publishedDate}
          />
        )
      }
    })
  }
  if (error) {
    return (
      <UniversalError />
    )
  } else {
    return (
      <>
        <SectionButtons />
        <div className='card-container'>
          {articlesValue && articleCards}
          {/* return a loader if there is no article availible yet if it's not defineed */}
        </div>
      </>
    )
  }
}

export default CardContainer