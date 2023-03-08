import React from 'react';
import instagramLogo from "./photos/instagram-logo-color.png"

function InstagramLoading() {
    return (
        <div className="instagram-loading-container">
            <img style={{position:"absolute",left:"48%",top:"25%"}} width="100px" src={instagramLogo} alt="instagram"/>
            <div style={{position:"absolute",left:"49%",top:"75%",fontSize:"20px"}}>from</div>
            <div style={{position:"absolute",left:"46%",top:"80%",fontSize:"30px"}}  id="instagram">FACEBOOK</div>
        </div>
    );
}

export default InstagramLoading;