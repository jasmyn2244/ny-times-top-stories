import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import SectionNews from './Components/SectionNews'
import StoryDetails from './Components/StoryDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/section/:section' element={<SectionNews />} />
        <Route path='details/;title' element={<StoryDetails />} />
      </Routes>
    </>
  );
}

export default App;
