import { Routes, Route } from 'react-router-dom';
import "./styles/App.scss"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import ListingDetail from './components/Listings/ListingDetail';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <div className='App'>
      <div className="main">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/listings/:id' element={<ListingDetail />}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
