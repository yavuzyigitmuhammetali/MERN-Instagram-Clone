import React, { useRef, useState, useEffect } from 'react';
import playButton from "./photos/play-button-arrowhead.png"
import speaker from "./photos/speaker-filled-audio-tool.png"
import muteButton from "./photos/mute.png"

function VideoPlayer({ children, video }) {
    const videoPlayerRef = useRef(null);
    const mainBoxRef = useRef(null);
    const [isPlayed, setIsPlayed] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const containerRect = mainBoxRef.current.getBoundingClientRect();
            if (containerRect.top < 0 && isPlayed) {
                setIsPlayed(false);
                videoPlayerRef.current.pause();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isPlayed]);

    const handleVideoClick = () => {
        const video = videoPlayerRef.current;
        if (isPlayed) {
            video.pause();
            setIsPlayed(false);
        } else {
            video.play();
            setIsPlayed(true);
        }
    };

    const handleMute = (isMuted) => {
        videoPlayerRef.current.muted = isMuted;
        setIsMuted(isMuted);
    }

    const handleVideoEnded = () => {
        setIsPlayed(false);
    };

    return (
        <div style={{ position: "relative" }} ref={mainBoxRef}>
            <video
                style={{ display:"flex", width: "100%", maxHeight: "585px", backgroundColor: "black" }}
                ref={videoPlayerRef}
                src={video}
                onClick={handleVideoClick}
                onTouchStart={handleVideoClick}
                onEnded={handleVideoEnded}
            />
            {!isPlayed && (
                <img className="video-player-play-button" src={playButton} alt="playButton" onClick={handleVideoClick} />
            )}
            {isMuted ?
                <img className="video-player-mute-button" src={muteButton} onClick={() => handleMute(false)} alt="speaker" />
                :
                <img className="video-player-mute-button" src={speaker} onClick={() => handleMute(true)} alt="speaker" />
            }
        </div>
    );
}

export default VideoPlayer;
