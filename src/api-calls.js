import { checkResponseStatus, cleanData } from "./utils"


const API_KEY = process.env.REACT_APP_API_KEY

export const getArticlesByCategory = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`)
    .then(response => checkResponseStatus(response))
    .then(data => cleanData(data))
}