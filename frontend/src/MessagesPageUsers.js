import React from 'react';


function MessagesPageUsers({profilePicture,name,lastMessage,time,active}) {
    return (
            <div style={{cursor:"pointer"}}>
                <div className="message-page-user-container" style={active&&{backgroundColor:"#EFEFEF"}}>
                    <img className="message-page-user-pp" style={{maxWidth:"100%"}} src={profilePicture} alt="pp"/>
                    <div className="message-page-user-info-container" style={{position:"relative"}}>
                        <div className="message-page-user-name">{name}</div>
                        <div className="message-page-last-message"><div>{lastMessage}</div>&nbsp;•&nbsp;<div>{time}</div></div>
                    </div>
                </div>
            </div>
    );
}

export default MessagesPageUsers;