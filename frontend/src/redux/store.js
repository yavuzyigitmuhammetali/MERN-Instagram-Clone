import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice"
import mainReducer from "./features/main/mainSlice"
    export default configureStore({
    reducer: {
        main:mainReducer,
        auth:authReducer,
    },
})