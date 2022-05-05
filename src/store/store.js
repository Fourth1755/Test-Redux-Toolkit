import {combineReducers, configureStore} from '@reduxjs/toolkit'

import animeListReducer from './slices/animeListSlices'
import authReducer from './slices/authSlices'

export default configureStore({
    reducer : {
        animeList : animeListReducer,
        auth : authReducer
    }
})