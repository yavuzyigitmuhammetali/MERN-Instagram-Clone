import React from 'react';
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import {Route, Routes} from "react-router-dom";
import MessagesPage from "./MessagesPage";

function Layout() {
    return (
        <div>
            <div className="homepage-box-container">
                <div>
                    <div className="homepage-navbar">
                        <Navbar/>
                    </div>
                </div>
        </div>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>} />
                    <Route path="/direct/inbox/" element={<MessagesPage/>} />
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>

        </div>
    );
}

export default Layout;