import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import CardContainer from './Components/CardContainer'
import ArticleDetails from './Components/ArticleDetails'
import { ArticlesProvider } from './Context/ArticlesContext';
function App() {
  return (
    <ArticlesProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/section/:section' element={<CardContainer />} />
        <Route path='/details/:title' element={<ArticleDetails />} />
      </Routes>
    </ArticlesProvider>
  );
}

export default App;
