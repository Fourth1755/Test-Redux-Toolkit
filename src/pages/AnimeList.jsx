import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { delteList } from "../actions/animeListActions";
const AnimeList=()=>{
    const animeList=useSelector(state=>state.animeList)
    const dispatch=useDispatch()
    return(
        <div className="container" > 
            <h1>My Anime List</h1>
            <table style={{width:'100%'}}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>count</th>
                    <th>delete</th>
                </tr>
                {animeList.length===0?
                    <tr>List is empty</tr>:animeList.map(item=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                        <td>{item.quantity}</td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>dispatch(delteList(item.id))}>Delete</button></td>
                    </tr>)}
            </table>
        </div>
    )
}
export default AnimeList;