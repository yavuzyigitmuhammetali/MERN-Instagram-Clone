import React from 'react';
import {Link} from "react-router-dom";

function MessagesPageUsers({profilePicture,name,lastMessage,time,active}) {
    return (
        <Link>
            <div>
                <div className="message-page-user-container" style={active&&{backgroundColor:"#EFEFEF"}}>
                    <img className="message-page-user-pp" style={{maxWidth:"100%"}} src={profilePicture} alt="pp"/>
                    <div className="message-page-user-info-container" style={{position:"relative"}}>
                        <div className="message-page-user-name">{name}</div>
                        <div className="message-page-last-message"><div>{lastMessage}</div>&nbsp;•&nbsp;<div>{time}</div></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MessagesPageUsers;