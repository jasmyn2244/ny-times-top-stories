export const getArticleByCategory = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA`)
    .then(response => response.json())
}