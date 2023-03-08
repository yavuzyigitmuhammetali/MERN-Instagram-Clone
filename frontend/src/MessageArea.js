import React from 'react';


function MessageArea({children,userName,pp}) {
    return (
        <div className="message-page-message-area-container">
            <div className="message-page-message-area-upper-bar">
                <img className="message-page-message-area-pp" src={pp} alt="pp"/>
                <div>{userName}</div>
            </div>
            <div className="message-page-message-area-messaging-area">
                {children}
            </div>

        </div>
    );
}

export default MessageArea;