import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArticlesContext } from '../Context/ArticlesContext'
import '../Styles/ArticleDetails.scss'


const ArticleDetails = () => {
  const { articlesValue } = useContext(ArticlesContext)
  const { articles } = articlesValue
  const { section, title } = useParams()
  const [newspaper, setNewspaper] = useState()

  let foundArticle = articles.find(article => {
    return article.title.includes(title)
  })

  useEffect(() => {
    setNewspaper(foundArticle)
  }, [])


  if (newspaper) {
    return (
      <>
        <Link to={`/section/${section}`}>
          <button className='back-button' data-cy='button'>Back to All Articles</button>
        </Link>
        <div className='details-border'>
          <div className='details-container'>
            <div className='details-title' data-cy='details-title'>{newspaper.title}</div>
            <div className='image-and-details'>
              <img
                className='details-image'
                data-cy='details-image'
                src={newspaper.multimedia[0].url}
                alt={newspaper.multimedia[0].url} />
              <div className='details-and-button'>
                <div className='details-details'>
                  <p className='paragraph' data-cy='byline'>{newspaper.byline}</p>
                  <p className='paragraph' data-cy='section'>Section: {section}</p>
                  <p className='paragraph' data-cy='published-date'>Published: {newspaper.publishedDate}</p>
                </div>
                <div className='abstract' data-cy='abstract'>Abstract: {newspaper.abstract}</div>
              </div>

            </div>
            <div className='article-button-container'>
              <div className='article-button-border'>
                <button className='full-article-button' data-cy='full-article-button'>
                  <a
                    href={newspaper.url}
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