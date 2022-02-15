import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MoviesDetails } from "./pages/MoviesDetails";
import { LandingPage } from "./pages/LandingPage";
import { Series } from "./pages/Series";
import { Usuario } from "./pages/Usuario";
import { Search } from "./components/Search";

export function App() {
  return (
    <Router>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="logo">
            <i className="fas fa-film nav-logo">Beta</i>
          </Link>
          <button className="nav-toggle" aria-label="Menú">
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/peliculas" className="nav-menu-link nav-link peliculas">
                Peliculas
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/series" className="nav-menu-link nav-link series">
                Series
              </Link>
            </li>
            <li className="nav-menu-item">
            <Search/>
            </li>
            <li className="nav-menu-item">
              <Link to="/usuario">
                <i className="fas fa-user nav-avatar"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route exact path="/movie/:movieId" element={<MoviesDetails/>}/>
          <Route exact path="/peliculas" element={<LandingPage/>}/>
          <Route exact path="/series" element={<Series/>}/>
          <Route exact path="/usuario" element={<Usuario/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}
