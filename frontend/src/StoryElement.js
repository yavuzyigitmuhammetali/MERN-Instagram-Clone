import React, {useState} from 'react';
import defaultStoryBorder from "./photos/story-out.png";
import storyBorderAnimation from "./photos/story-out-animation.gif"
import storyBorderPassive from "./photos/story-out-passive.png"

function StoryElement({profilePicture, children, checkOpen}) {
    const [isOpened, checker] = useState(false)
    const border = () => {
        if (checkOpen === true) {
            return (<img className="main-page-story-border" src={storyBorderPassive} alt="border"/>)
        } else if (isOpened === true) {
            return (<img className="main-page-story-border" src={storyBorderAnimation} alt="border"/>)
        } else {
            return (<img className="main-page-story-border" src={defaultStoryBorder} alt="border"/>)
        }
    }
    return (
        <div className="test-box">
            {border()}
            <img className="main-page-story-pp" src={profilePicture} alt="pp" onClick={() => checker(true)}/>

            <div className="main-page-story-username all-gray">{children}</div>
        </div>
    );
}

export default StoryElement;