import './App.css';
import react from 'react';
import mockCats from './mockData';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'



const App = () => {

  const [cats, setCat] = useState(mockCats)
  console.log(cats)



  return (
    <>
      <Header />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/catindex" element={<CatIndex cats={ cats }/>} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )
}



export default App;
