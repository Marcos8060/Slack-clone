import { Button } from '@mui/material'
import React, {useState} from 'react'
import './ChatInput.css'
import db from './firebase';
import { useStateValue } from './stateProvider';
import firebase from './firebase';

function ChatInput({channelName,channelId}) {
    const [input,setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) =>{
        e.preventDefault();

        if(channelId){
            db.collection('rooms').doc(channelId).collection.add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userimage: user.photoURL
            })
        }

    }
    return (
        <div className='chatInput'>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder={`Message #${channelName}`}
                />
                <Button type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
