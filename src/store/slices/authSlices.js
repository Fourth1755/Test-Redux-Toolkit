import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {signin} from '../../api/user'
const initialState = {
    user:null,
    loading: false,
    error:''
}

const signinAsync = createAsyncThunk('signin', async ({email,password},store)=>{
    try {
        const user = await signin(email,password)
        return user
    } catch (error) {
        throw error
    }
})

//signinAsync.pending ,signinAsync.fulfilled ,signinAsync.rejected

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        signout:(state,action)=>{
            state.user = null
            state.loading = false
            state.error = ''
        }
    },
    extraReducers: {
        [signinAsync.pending]:(state,action) =>{
            state.loading = true
            state.error = ''
        },
        [signinAsync.fulfilled]:(state, action) =>{
            state.user = action.payload
            state.loading = false
            state.error = ''
        },
        [signinAsync.rejected]:(state,action) =>{
            state.user = null
            state.loading = false
            state.error = action.error.message
        }
    }
})

const {signout} = authSlice.actions

export default authSlice.reducer