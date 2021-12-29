import React, { useState, useEffect } from 'react'
import './Chat.css'
import {useParams } from 'react-router-dom'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
import db from './firebase';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails,setRoomDetails] = useState();

    useEffect(()=>{
        if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(
               setRoomDetails(snapshot.data())
           ))
        }
    },[roomId])

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
        </div>
    )
}

export default Chat
