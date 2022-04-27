import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArticlesContext } from '../Context/ArticlesContext'
import '../Styles/ArticleDetails.scss'


const ArticleDetails = () => {
  const { articlesValue } = useContext(ArticlesContext)
  const { articles } = articlesValue
  const { section, title } = useParams()
  const [selectedArticle, setSelectedArticle] = useState()

  let foundArticle = articles.find(article => {
    return article.title.includes(title)
  })

  useEffect(() => {
    setSelectedArticle(foundArticle)
  }, [])


  if (selectedArticle) {
    return (
      <>
        <Link to={`/section/${section}`}>
          <button className='back-button' data-cy='button'>Back to All Articles</button>
        </Link>
        <div className='details-border'>
          <div className='details-container'>
            <div className='details-title' data-cy='details-title'>{selectedArticle.title}</div>
            <div className='image-and-details'>
              <img
                className='details-image'
                data-cy='details-image'
                src={selectedArticle.multimedia[0].url}
                alt={selectedArticle.multimedia[0].url} />
              <div className='details-and-button'>
                <div className='details-details'>
                  <p className='paragraph' data-cy='byline'>{selectedArticle.byline}</p>
                  <p className='paragraph' data-cy='section'>Section: {section}</p>
                  <p className='paragraph' data-cy='published-date'>Published: {selectedArticle.publishedDate}</p>
                </div>
                <div className='abstract' data-cy='abstract'>Abstract: {selectedArticle.abstract}</div>
              </div>

            </div>
            <div className='article-button-container'>
              <div className='article-button-border'>
                <button className='full-article-button' data-cy='full-article-button'>
                  <a
                    href={selectedArticle.url}
                    target="_blank"
                    rel="noreferrer">View Full Article
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default ArticleDetails