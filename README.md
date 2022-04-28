# NY Times Top Stories

## Table of Contents   

- [Abstract](#abstract)
- [Project Goals](#project-goals)
- [Project Specs](#project-specs)
- [Challenges](#challenges)
- [Future Iterations](#future-iterations)
- [Install and Setup](#install-and-setup)
- [api](#api)
- [Tech Stack](#tech-stack)
- [Contributors](#contributors)

## Abstract

NY Times Top Stories allows users to view top news stories based on thier news section of interest.

## Project Goals

- Practice builidng an entire app quickly to simulate a take home challenge
- Solidify all skills and processes learned at bootcamp including:
  - React
  - React Hooks
  - React Router
  - Gobal State Management, or context API
  - Rest API, fetch calls
  - Data cleaning
  - Error Handling
  - Considering Edge Cases
  - Accessiblilty
  - Responsive Design
  - Data manipulation (iterators)
  - SCSS (flexbox, grid, animations)
  - Cypress Testing
  - Git and Github (pull request templates)
  - Project Planning (with Figma and Github project boards)
  - User Experience
  
## Project Specs

View wire frame [here](https://www.figma.com/file/qbZozMRUVdj5i832rnFF6I/NY-Times-Top-Stories?node-id=0%3A1) 
View project requirements [here](https://mod4.turing.edu/projects/take_home/take_home_fe)


**Homepage:**

The user can select a news category to begin viewing news articles

<img width="1418" alt="Screen Shot 2022-04-27 at 2 12 47 PM" src="https://user-images.githubusercontent.com/78129211/165653529-669d49c2-bdb4-47b2-8b81-747af9369d94.png">


**Brows Articles By Catergory**

Once a category is selected, users can scroll through the cards to find an articles of interest

<img width="1432" alt="Screen Shot 2022-04-27 at 2 13 17 PM" src="https://user-images.githubusercontent.com/78129211/165653520-e70d1518-2db1-4aec-84cb-ae06ee115453.png">


**Article Details Page:**

When users click a card, they are taken to an articles details pages where they can view more information about the article including an abstract. They can click a button to be linked to the full NYT article, or go back to brows more of the articles

<img width="1423" alt="Screen Shot 2022-04-27 at 2 13 48 PM" src="https://user-images.githubusercontent.com/78129211/165653516-e7aadb89-c844-4172-8d8c-495e994bf784.png">


**Error Handling:**

If a user types in an incorrect url, they will be directed to this error page. There is a similar error page for any error that may arise with errors in the fetch call.

<img width="1426" alt="Screen Shot 2022-04-27 at 2 16 14 PM" src="https://user-images.githubusercontent.com/78129211/165653510-3daef072-093a-4d03-85e6-38485191b122.png">


## Challenges

- Had problems switching versions of React from 19 back to 17. In the end I chose to use version 18 and it worked out ok.
- When trying to apply a context api, I learned that you can only pass one variable as a value to the children of the context provider.
- Ran into problems with git and learned how to undo commits and stay more organized
- Learned that a question mark in the url is a reserved keyword and it was effecting how I passed down the aricle title with useParams
- The initial installatino of cypress didn't generate a cypress folder so I found solutions for that
- I also spent many hours learning the quirts of SCSS and which units work best for an display that is responsive to screen size.


## Future Iterations

- Add feature so users can search articles by keyword
- Add a 'save for later' feature so users can collect stories they want to read later
- Add media queries for a more exact responsive design
- I'd like to add new CSS features (an indicator for which section button a user has clicked, a carousel for the images that go with an artice, conditionally rendered borders that match the color of the article's section, add variable and mix-ins to clean up the CSS
- I'm interested in making the app the PWA
- I'd like to set up continous integretion and deploy the app

## Install and Setup

To run this app locally:

1. fork this repository
2. run ```git clone  git@github.com:jasmyn2244/ny-times-top-stories.git``` in your command line
3. Run ```cd ny-times-top-stories``` to navigate into the repository
4. Run ```npm install```
5. Run ```npm start```
6. Visit ```http://localhost:3000/``` in your browser to view NY Times Top Stories app!

## api

For this project, I access data from the NYT Top Stories API.

[NTY API](https://developer.nytimes.com/docs/top-stories-product/1/overview)

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)


# Contributors

Jasmyn Hicks (she/her)
[GitHub](https://github.com/jasmyn2244)  
[LinkedIn](https://www.linkedin.com/in/jasmyn-hicks/)
