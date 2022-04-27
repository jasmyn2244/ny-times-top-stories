const checkResponseStatus = (response) => {
  if (!response.ok) {
    throw new Error(`Error`)
  } else {
    return response.json()
  }
}

const cleanData = (data) => {
  const cleanedData = data.results.reduce((acc, article) => {
    if (article.title && article.multimedia && article.published_date && article.byline) {
      acc.push({
        title: article.title,
        publishedDate: reformatDate(article.published_date),
        byline: article.byline,
        multimedia: article.multimedia,
        abstract: article.abstract,
      })
    }
    return acc
  }, [])
  return cleanedData
}

const reformatDate = (date) => {
  let [year, month, day] = date.split('-')
  day = day.substring(0, 2)
  let formatedDate = [month, day, year].join('.')
  return formatedDate
}

export { checkResponseStatus, cleanData }