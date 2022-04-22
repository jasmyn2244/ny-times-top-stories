import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ArticlesContext } from '../Context/ArticlesContext'

const ArticleDetails = () => {
  const { articles, setArticles } = useContext(ArticlesContext)
  const title = useParams().title
  const selectedArticle = null

  if (title) {
    selectedArticle = articles.find(article => {
      article.title = title
    })
  }

  return (
    <>
      <p>story details page</p>
    </>
  )
}

export default ArticleDetails