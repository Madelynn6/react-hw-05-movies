import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <h1>Hej</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;
