import React from 'react'
import { useHistory } from 'react-router-dom'
import db from './firebase';
import './SidebarOption.css'

function SidebarOptions({Icon,title, addChannelOption, id}) {

    const history = useHistory();

    const selectChannel = () =>{
        if(id){
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }

    const addChannel = ()=>{
        const channnelName = prompt('please enter a channel name');

        if(channnelName){
            db.collection('rooms').add({
                name: channnelName
            })
        }
    }
    return (
        <div 
        className='sidebarOption'
        onClick={addChannelOption ? addChannel : selectChannel}>
           {Icon && <Icon className='sidebarOption_icon'/>}
           {Icon ? <h3>{title}</h3> : 
                   <h3 className='sidebarOption_channel'> 
                       <span className='sidebarOption_hash' >#</span>{title}
                   </h3>}
        </div>
    )
}

export default SidebarOptions
