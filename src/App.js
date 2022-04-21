import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import SectionNews from './Components/SectionNews'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bysection/:section' element={<SectionNews />} />
      </Routes>
    </>
  );
}

export default App;
