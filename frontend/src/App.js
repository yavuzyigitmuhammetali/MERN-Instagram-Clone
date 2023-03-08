import React, {useEffect} from "react";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import InstagramLoading from "./InstagramLoading";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {getLoginStatus, getUserProfile} from "./services/authService";
import {SET_LOGIN, SET_USER} from "./redux/features/auth/authSlice";
import {SET_LOADING} from "./redux/features/main/mainSlice";


axios.defaults.withCredentials = true;

function App() {

    const loading = useSelector((state) => state.main.loading)
    const dispatch = useDispatch();
    const checkLogin = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        const setCheckLogin = async () => {
            dispatch(SET_LOADING(true))
            const status = await getLoginStatus();
            await dispatch(SET_LOGIN(status))
            dispatch(SET_LOADING(false))
            dispatch(SET_LOADING(false))

        }

        async function setUserInfo() {
            const first = await getUserProfile();
            dispatch(SET_USER(first));
        }

        setCheckLogin()
        setUserInfo()
    }, [dispatch]);

    return (
        <div>
            {loading ? <InstagramLoading/> : null}
            {checkLogin ?
                <Layout/>
                :
                <LoginPage/>
            }
        </div>
    );
}

export default App;
