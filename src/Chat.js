import React, { useState, useEffect } from 'react'
import './Chat.css'
import {useParams } from 'react-router-dom'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
import db from './firebase';
import Message from './Message';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails,setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(()=>{
        if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(
               setRoomDetails(snapshot.data())
           ))
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
        .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    },[roomId])

    console.log(roomMessages);

    return (
        <div className='chat'>
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarOutlineIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {roomMessages.map((message)=>{
                    return (
                    <Message 
                      user={message.user}
                      message={message.message}
                      userimage={message.userimage}
                      timestamp={message.timestamp}
                      key={message.id}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default Chat
