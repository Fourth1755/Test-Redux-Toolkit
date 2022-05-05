import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {deleteAnimeList} from '../slices/animeListSlices'
const AnimeList=()=>{
    const animeList=useSelector(state=>state.animeList)
    const dispatch=useDispatch()
    return(
        <div className="container" > 
            <h1>My Anime List</h1>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>count</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {animeList.length===0?
                    <tr>List is empty</tr>:animeList.map(item=>
                    <div key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                            <td>{item.quantity}</td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteAnimeList(item.id))}>Delete</button></td>
                        </tr>
                    </div>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default AnimeList;