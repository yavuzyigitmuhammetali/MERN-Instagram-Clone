// eslint-disable-next-line no-unused-vars
import React, {useRef} from 'react';
import right from "./photos/right.png"
import left from "./photos/left.png"
import test_pp_icon from "./photos/1.jpg"
import StoryElement from "./StoryElement";


function StoryArea() {
    const scrollRef = useRef();

    const scrollRight = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft + 325,
            behavior: 'smooth'
        });
    };
    const scrollLeft = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft - 325,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div>
                <div className="story-left-button" onClick={scrollLeft}><img src={left} alt="left"/></div>
                <div className="story-area-box" ref={scrollRef}>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        yavuzyigitmuhammetali
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon} checkOpen={true}>
                        yavuzyigitmuhammetali
                    </StoryElement>

                </div>
                <div className="story-right-button" onClick={scrollRight}><img src={right} alt="right"/></div>
            </div>

        </div>
    );
}

export default StoryArea;
