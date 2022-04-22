import React, { useState, createContext } from 'react'

const ArticlesContext = createContext()

const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const articlesValue = { articles, setArticles }

  return (
    <ArticlesContext.Provider
      value={{ articlesValue }}>
      {children}
    </ArticlesContext.Provider>
  )
}

export { ArticlesProvider, ArticlesContext }