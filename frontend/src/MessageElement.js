import React, {useEffect, useState} from 'react';

function MessageElement({children,other}) {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setShowMessage(true);

    }, []);
    return (
        <div style={other?null:{marginLeft:"auto",backgroundColor:"#EFEFEF"}} className="message-element-container">
            {children}
        </div>
    );
}

export default MessageElement;