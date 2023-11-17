import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Moives';
import About from './About/About';
import Contact from './Contact/Contact';
import MovieName from './MovieName/MovieName';
import Footer from './Footer/Footer';
import Error from './Error/Error';
function App() {
  return (
  <>
    <BrowserRouter>
<Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movies/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/moviename/:id' element={<MovieName/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
  <Footer/>      
    </BrowserRouter>
  </>
  );
}

export default App;
