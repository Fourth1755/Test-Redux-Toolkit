import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {signinAsync} from '../store/slices/authSlices'

const Signin=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()
    const {loading,error} =useSelector(state=>state.auth)
    return(
        <div className="container">
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={password} onChange={e=>setPassword(e.target.value)} />
                </div>
                <button onClick={()=>dispatch(signinAsync({email,password}))}>{loading ? "loading" : "Submit"}</button>    
                {error && <p style={{color:'red',fontSize:'12'}}>{error}</p>}
        </div>
    );
}
export default Signin;