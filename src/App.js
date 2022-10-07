import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import CardsDetails from './components/CardsDetails'
import Cards from './components/Cards';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;