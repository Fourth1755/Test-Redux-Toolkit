import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const animeListSlice = createSlice({
    name:'animeList',
    initialState,
    reducers:{
        addToAnimeList: (state,action) =>{
            const foundItem = state.find(
                (item)=>item.id === action.payload.id
            )
            if(!foundItem){
                state.push(action.payload)
            } else {
                return state.map(item=>({
                    ...item,
                    quantity:item.id=== foundItem.id ? item.quantity+1 :item.quantity
                }))
            } 
        },
        deleteAnimeList:(state,action)=>{
            return  state.filter(item=>item.id!==action.payload)
        }
    }
})
