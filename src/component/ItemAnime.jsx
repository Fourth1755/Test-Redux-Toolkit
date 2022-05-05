import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import {addToAnimeList} from '../slices/animeListSlices'
const ItemAnime =({anime})=>{
    const dispatch=useDispatch()
    //const {user} =useSelector(state=>state.auth)
    //const history= useHistory()
    function handleAddToList(){
        // if(!user){
        //     history.push('/signin')
        // }else{
            dispatch(addToAnimeList({...anime,quantity:1}))
        //}
    }
    return(
        <div className="card" style={{width: '14rem',margin: '20px'}}>
            <img className="card-img-top" src={anime.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{anime.name}</h5>
                <p className="card-text">{anime.year}</p>
                <button onClick={handleAddToList} className="btn btn-primary">Add to list</button>
            </div>
        </div>
    );
}
export default ItemAnime