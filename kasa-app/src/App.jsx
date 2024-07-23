import { Routes, Route } from 'react-router-dom';
import "./styles/App.scss"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ListingDetail from './pages/ListingDetail';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className='app'>
      <header>
        <Header />
      </header>
      <main className='main-container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/listings/:id' element={<ListingDetail />}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
