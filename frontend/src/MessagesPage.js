import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import MessagesPageUsers from "./MessagesPageUsers";
import MessageArea from "./MessageArea";
import {useDispatch, useSelector} from "react-redux";
import {SET_LOADING} from "./redux/features/main/mainSlice";
import {getBasicInfo, getMessages, linkedUsers, sendMessage} from "./services/messageService";
import MessageElement from "./MessageElement";

import io from "socket.io-client";
import SendMessageBox from "./SendMessageBox";
const socket = io("http://localhost:4000/");

function MessagesPage() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)
    const [users, setUsers] = useState([]);
    const [messagesState,setMessagesState] = useState([]);
    const [selectedUser,setSelectedUser] = useState("")
    const [selectedUserBasic,setSelectedUserBasic] = useState({});

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on(
            user._id, data => {
            const {from,messages} = data;
            if (from===selectedUserBasic._id){
                const tmp = {senderId:from,text:messages,isRead:false}
                const tmp2 = [...messagesState,tmp]
                setMessagesState(tmp2)

            }
        })
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off(user._id);
        };
    }, [user,selectedUserBasic,messagesState]);



    const [text, setText] = useState('');
    const pressEnter=(event)=>{
        if(event.keyCode===13){
            sendMessage(selectedUser,text)
            socket.emit("messages",{from:user._id,to:selectedUserBasic._id,messages:text})
            const tmp = {senderId:user._id,text:text,isRead:false}
            const tmp2 = [...messagesState,tmp]
            setMessagesState(tmp2)
            setText('');
            event.preventDefault();
        }
    }


    const getMessageByUsername = (userName)=>{
        getMessages(userName).then(data=>{
            const dataArray = Object.values(data);
            setMessagesState([...dataArray[0]])
        })
        getBasicInfo({userName:selectedUser}).then(data=>{
            setSelectedUserBasic(data)
        })
    }

    useEffect(() => {
        dispatch(SET_LOADING(true))
        linkedUsers().then(data => {
            const dataArray = Object.values(data);
            setUsers(dataArray);
            dispatch(SET_LOADING(false))
        });

    }, [dispatch]);

    useEffect(() => {
        if(selectedUser.length!==0){
                getMessageByUsername(selectedUser)
        }else {
            setSelectedUser("")
        }
    }, [selectedUser]);

    return (
        <div>
            <Routes>
                <Route path="/new/" element={<SendMessageBox/>} />
            </Routes>
            <div className="message-page-container">
                <div className="message-page-main-area">
                    <div className="message-page-left-area">
                        <div className="message-page-left-area-upper">
                            <div style={{margin: "auto"}}>yavuzyigitmuhammetali</div>
                            <Link style={{position: "absolute", right: "5%", top: "30%"}}
                                  to="http://localhost:3000/direct/new/">
                                <svg className="_ab6-" color="rgb(38, 38, 38)"
                                     fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <path
                                        d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2"></path>
                                    <path
                                        d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2"></path>
                                    <line fill="none" stroke="currentColor" strokeLinecap="round"
                                          strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924"
                                          y2="7.153"></line>
                                </svg>
                            </Link>
                        </div>

                        <div className="message-page-left-area-bottom">
                            {users.map((u,index)=>
                                <div onClick={()=>{setSelectedUser(u.userName)}} key={index}>
                                <MessagesPageUsers  name={u.name} lastMessage="Sent you a message"
                                                    time="?h" profilePicture={require("./photos/"+u.ppLink)}/>
                                </div>
                            )}


                        </div>
                    </div>

                    {messagesState.length?
                        <div>
                            <MessageArea userName={selectedUserBasic.name} pp={require("./photos/"+selectedUserBasic.ppLink)} >
                                {messagesState.map((m,index)=>{
                                        if(selectedUserBasic._id!==m.senderId){
                                            return(<MessageElement key={index}>{m.text}</MessageElement>)
                                        }else{
                                            return(<MessageElement other key={index}>{m.text}</MessageElement>)
                                        }
                                    }
                                )}

                            </MessageArea>
                            <div className="message-page-message-area-messaging-area-bottom">
                                <div className="message-page-message-area-message-box">
                                    <svg aria-label="İfade Simgesi" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)"
                                         height="24"
                                         role="img" viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                    </svg>
                                    <textarea style={{height:"inherit",marginTop:"0.8%",maxHeight:"50%"}} value={text} onKeyDown={pressEnter} placeholder="Message..." className="message-box" onChange={event=>{setText(event.target.value);}}>
            </textarea>
                                    {text.length!==0?
                                        <div style={{fontWeight:"bold", marginRight:"10px",color:"#0095F6"}}>Send</div>
                                        :
                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <svg style={{marginRight:"8px"}} aria-label="Add Photo or Video" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)"
                                                 height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                                                      fillRule="evenodd"></path>
                                                <path
                                                    d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                                                    fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                                                <path
                                                    d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                                                    fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                    strokeWidth="2"></path>
                                            </svg>
                                            <svg style={{marginRight:"5px"}} aria-label="Like" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24"
                                                 role="img" viewBox="0 0 24 24" width="24">
                                                <path
                                                    d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                            </svg></div>
                                    }

                                </div>
                            </div>
                        </div>
                        :
                        <div className="message-page-right-area">
                            <svg className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)"
                                 height="96" role="img" viewBox="0 0 96 96" width="96">
                                <circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" strokeLinecap="round"
                                        strokeLinejoin="round" strokeWidth="2"></circle>
                                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="69.286"
                                      x2="41.447" y1="33.21" y2="48.804"></line>
                                <polygon fill="none"
                                         points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                                         stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                            </svg>
                            <h3>Your Messages</h3>
                            <h5 className="all-gray">Send private photos and messages to a friend or group.</h5>
                                <Link to="/direct/new"><div className="message-page-send-message-button">
                                    <div >Send Message</div>
                                </div></Link>
                        </div>
                    }



                </div>
            </div>
        </div>
    );
}

export default MessagesPage;