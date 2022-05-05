import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Signin from "./pages/Signin"
import AnimeList from "./pages/AnimeList"
import Anime from "./pages/Anime"
import HomePage from './pages/HomePage';
import {Route,Switch,Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/animeList" element={<AnimeList/>}/>
            <Route path="/anime" element={<Anime/>}/>
        </Routes>
    </div>
  );
}

export default App;
