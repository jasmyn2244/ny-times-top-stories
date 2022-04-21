export const getArticlesByCategory = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA`)
    .then(response => response.json())
}

// export const getArticlesByCategory = (category) => {
//   return fetch(`https://api.nytimes.com/svc/topstories/v2/Arts.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA`)
//     .then(response => response.json())
// }

//Store the API Key:
//Have GitHub ignore the file that stores the key
//