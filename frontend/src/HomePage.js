import React from 'react';

import MedianArea from "./MedianArea";
import AvatarArea from "./AvatarArea";

function HomePage() {
    return (
            <div className="homepage-main-area">
                <div></div>
                <div className="home-page-post-area">
                    <MedianArea/>
                </div>
                <div className="home-page-avatar-area">
                    <AvatarArea/>
                </div>
                <div className="home-page-upper-navbar"></div>
            </div>
    );
}

export default HomePage;