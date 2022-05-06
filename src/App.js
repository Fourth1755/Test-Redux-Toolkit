import './App.css';
import Navbar from "./component/Navbar";
import Signin from "./pages/Signin"
import AnimeList from "./pages/AnimeList"
import Anime from "./pages/Anime"
import HomePage from './pages/HomePage';
import {Route,Switch,Routes,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function UnAuthApp(){
  return (<Routes>
     <Route path="/home" element={<HomePage/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/anime" element={<Anime/>}/>
  </Routes>)
}
function AuthApp(){
  return (<Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/animeList" element={<AnimeList/>}/>
      <Route path="/anime" element={<Anime/>}/>
  </Routes>)
}

const App=()=> {
  const {user} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate('/signin')
    }
    else{
      navigate('/anime')
    }
  },[user])
  return (
    <div>
        <Navbar/>
        
        {!user ? <UnAuthApp/> : <AuthApp/>}
    </div>
  );
}

export default App;
