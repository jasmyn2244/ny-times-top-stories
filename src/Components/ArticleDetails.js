import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArticlesContext } from '../Context/ArticlesContext'
import '../Styles/ArticleDetails.scss'


const ArticleDetails = () => {
  const { articlesValue } = useContext(ArticlesContext)
  const { articles } = articlesValue
  const { section, title } = useParams()

  let selectedArticle = articles.find(article => {
    console.log('article.title', article.title)
    console.log('title>>>>', title)
    return article.title = title
  })


  return (
    <>
      <Link to={`/section/${section}`}>
        <button>Back to All Articles</button>
      </Link>
      <div className='details-container'>
        <div className='title'>{selectedArticle.title}</div>
        <div className='image-and-details'>
          <img
            className='image'
            src={selectedArticle.multimedia[0].url}
            alt={selectedArticle.multimedia[0].url} />
          <div className='details-and-button'>
            <div className='details'>
              <p>{selectedArticle.byline}</p>
              <p>{selectedArticle.published_date}</p>
              <p>{section}</p>
            </div>
            <button className='button'>View Full Article</button>
          </div>
        </div>
        <div className='abstract'>{selectedArticle.abstract}</div>


      </div>

      <p>story details page</p>
    </>
  )
}

export default ArticleDetails