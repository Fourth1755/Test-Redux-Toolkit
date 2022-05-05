import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Signin from "./pages/Signin"
import AnimeList from "./pages/AnimeList"
import Anime from "./pages/Anime"
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom"
function App() {
  return (
    <div>
        <Navbar/>
          <Switch>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/animeList" exact component={AnimeList}/>
            <Route path="/anime" exact component={Anime}/>
        </Switch>
    </div>
  );
}

export default App;
