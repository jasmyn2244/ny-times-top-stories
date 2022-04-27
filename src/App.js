import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import CardContainer from './Components/CardContainer'
import ArticleDetails from './Components/ArticleDetails'
import { ArticlesProvider } from './Context/ArticlesContext';
import LostError from './Components/LostError'


function App() {
  return (
    <ArticlesProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/section/:section' element={<CardContainer />} />
        <Route path='/:section/details/:title' element={<ArticleDetails />} />
        <Route path='*' element={<LostError />} />
      </Routes>
    </ArticlesProvider>
  );
}

export default App;
