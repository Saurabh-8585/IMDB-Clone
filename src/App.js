import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import MovieList from './Components/Movie/MovieList';
import MovieDetail from './Pages/MovieDetail';
// import Header from './Components/Header';
// import Home from './Pages/Home';
// import MovieDetail from './Pages/MovieDetail';
// import MovieList from './Components/MovieList';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={<MovieDetail />} />
          <Route path='movies/:type' element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
