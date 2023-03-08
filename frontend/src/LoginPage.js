import React, {useState} from 'react';
import instagram_logo from "./photos/Instagram_logo.svg.png"
import {loginUser,getLoginStatus} from "./services/authService";
import {useDispatch, useSelector} from "react-redux";
import {SET_LOGIN} from "./redux/features/auth/authSlice";

function LoginPage() {
    const dispatch = useDispatch();
    const [announcement, setAnnouncement] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState(false);
    const [err, setErr] = useState("");
    const checkUser = useSelector((state) => state.auth.user)

    const login = async (e)=>{
        e.preventDefault();
        if (!userName || !password) {

        }

        const input = {
            userName,
            password
        }
        try {
            const data = await loginUser(input);
            if (!data.response){
               const status = await getLoginStatus();
                if (status===true){
                   dispatch(SET_LOGIN(true))
                    console.log(data)
                }
            }else{
                setErr(data.response.data.message)
            }



        } catch (error) {
            console.log("Failed to establish an efficient connection to the server!")
        }
    }


    return (
        <div>
            {!announcement ?
                <div className="background-filter">
                    <div className="info-box">This copy is a copy of Instagram prepared by me and very open to
                        criticism, which I bravely started before I had even completed two weeks of web programming, and
                        therefore I was aware that I might have shortcomings. (I only had a few months of C++
                        experience)
                        As I am extremely deficient in every subject and therefore need to improve a lot in every area;
                        Tailwindcss, Bootstrap etc. I tried not to use any of the methods that would make my job easier
                        and everything ready (all css, html, js. belong to me).
                        I need your help more than enough;
                        What I need most right now are comments from experienced people.
                        The features you want me to add to the project, the areas you think I am missing and advice etc.
                        I would be very happy if you write to the email address I have added below :)<br/>
                        Thanks in advance, I will continue to work hard to improve as much as possible ...
                        <h1>"yavuzyigitmuhammetali@gmail.com"</h1>
                        <div style={{color:"red",fontWeight:"bold",border:"1px solid red",margin:"auto"}} onClick={() => setAnnouncement(false)}>CLOSE!</div>
                    </div>
                </div>
                :
                null
            }

            <div className="login-page-main-area-container">
                <div>
                    <div><img className="login-page-instagram-logo" src={instagram_logo} alt="instagramLogo"/></div>
                    <form onSubmit={login}>
                        <div className="login-page-login-area">
                            <input onChange={event => setUserName(event.target.value)} type="text" id="username"
                                   style={{height: "36px", width: "268px", margin: "auto"}}
                                   placeholder="Username"/>
                            <input onChange={event => setPassword(event.target.value)} type="password" id="password"  height="38px"
                                   style={{height: "36px", width: "268px", margin: "auto", marginTop: "10px"}}
                                   placeholder="Password"/>
                            <div style={{marginRight: "45%", marginTop: "20px"}}><input type="checkbox" id="remember-me"
                                                                                        name="remember-me"/> <label
                                htmlFor="remember-me">Save login info</label></div>
                            <button type="submit" style={{
                                width: "268px",
                                height: "32px",
                                backgroundColor: "#4CB4F8",
                                color: "white",
                                borderRadius: "10px",
                                border: "none",
                                margin: "auto",
                                marginTop: "-10px"
                            }}>
                                Login
                            </button>
                            <div style={{color: "red"}}>Forgot your password?</div>
                            <div>You're screwed because this feature is not yet active :)</div>
                            <div style={{color:"red"}}>{err}</div>
                        </div>
                    </form>

                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "auto"}}>
                    <div>Don't have an account?</div>
                    <a href="/register" style={{color: "#4CB4F8", marginLeft: "5px", textDecoration: "none"}}>Sign
                        up</a>
                </div>
            </div>
            <div className="login-page-bottom-area all-gray">
                <a href="https://about.meta.com/">Meta</a>
                <a href="https://about.instagram.com/">About</a>
                <a href="https://about.instagram.com/blog/">Blog</a>
                <a href="https://www.instagram.com/about/jobs/">Jobs</a>
                <a href="https://help.instagram.com/">Help</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
                <a href="https://www.instagram.com/legal/terms/">Terms</a>
                <a href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
                <a href="https://www.instagram.com/explore/locations/">Location</a>
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading & Non-Users</a>
                <a href="https://about.meta.com/technologies/meta-verified/">Meta Verified</a>
            </div>
        </div>
    );
}

export default LoginPage;