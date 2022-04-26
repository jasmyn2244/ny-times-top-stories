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
      {console.log(selectedArticle)}
      <Link to={`/section/${section}`}>
        <button className='back-button'>Back to All Articles</button>
      </Link>
      <div className='details-border'>
        <div className='details-container'>
          <div className='details-title'>{selectedArticle.title}</div>
          <div className='image-and-details'>
            <img
              className='details-image'
              src={selectedArticle.multimedia[0].url}
              alt={selectedArticle.multimedia[0].url} />
            <div className='details-and-button'>
              <div className='details-details'>
                <p>{selectedArticle.byline}</p>
                <p>{selectedArticle.published_date}</p>
                <p>{section}</p>
              </div>
              <a className='full-article-button' href={selectedArticle.short_url} target='_blank' rel="noreferrer">View Full Artilce</a>
              {/* <Link to={`/${selectedArticle.short_url}`} action='replace'>
                < button className='full-article-button'>View Full Article</button>
              </Link > */}
            </div>
          </div>
          <div className='abstract'>{selectedArticle.abstract}</div>


        </div>
      </div>

    </>
  )
}

export default ArticleDetails