import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'

const Navbar=()=>{
    const animeList =useSelector((state)=>state.animeList)
    //const {user} =useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    // function signOut(){
    //     dispatch(setAuth(null))
    //     dispatch(setList([]))
    // }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/animeList' className="nav-link">Anime List<span>{animeList.reduce((sum,item)=>sum+item.quantity,0)}</span></Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to='/anime' className="nav-link">Anime</Link>
                        </li>
                        
                        <li className="nav-item">
                            
                            <Link to='/signin' className="nav-link">Sign in</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar