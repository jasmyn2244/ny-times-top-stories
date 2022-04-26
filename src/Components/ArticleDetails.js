import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArticlesContext } from '../Context/ArticlesContext'
import '../Styles/ArticleDetails.scss'


const ArticleDetails = () => {
  const { articlesValue } = useContext(ArticlesContext)
  const { articles } = articlesValue
  const { section, title } = useParams()
  const [newspaper, setNewspaper] = useState()

  let counter = 0
  let foundArticle = articles.find(article => {
    counter++
    console.log(counter)
    console.log('article', article)
    console.log('title', title)
    return article.title.includes(title)
  })
  console.log('foundArticle', foundArticle)

  useEffect(() => {
    setNewspaper(foundArticle)
  }, [])


  if (newspaper) {
    return (
      <>
        {/* {console.log('seclected Article', selectedArticle)} */}
        {console.log('newspaper', newspaper)}
        {/* {console.log('found article', foundArticle)} */}
        {/* {console.log('selected article', selectedArticle)} */}
        <Link to={`/section/${section}`}>
          <button className='back-button'>Back to All Articles</button>
        </Link>
        <div className='details-border'>
          <div className='details-container'>
            <div className='details-title'>{newspaper.title}</div>
            <div className='image-and-details'>
              <img
                className='details-image'
                src={newspaper.multimedia[0].url}
                alt={newspaper.multimedia[0].url} />
              <div className='details-and-button'>
                <div className='details-details'>
                  <p className='paragraph'>{newspaper.byline}</p>
                  <p className='paragraph'>Section: {section}</p>
                  <p className='paragraph'>Published: {newspaper.published_date}</p>
                </div>
                <div className='abstract'>Abstract: {newspaper.abstract}</div>
                {/* <p>{newspaper.published_date}</p>
              <p>{section}</p> */}
              </div>

            </div>
            <div className='article-button-container'>
              <div className='article-button-border'>
                <button className='full-article-button'>
                  <a
                    href={newspaper.short_url}
                    // className='full-article-button'
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