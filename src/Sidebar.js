import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase'

function Sidebar() {
    const [channels, setChannels] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            }))
            )
        ))
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Marcos Ochieng</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        @MarcosOchieng
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="comment"/>
            <SidebarOptions Icon={InboxIcon} title='Mentions &  reactions'/>
            <SidebarOptions Icon={DraftsIcon} title='Saved items'/>
            <SidebarOptions Icon={BookmarkBorderIcon} title='Channel browser'/>
            <SidebarOptions Icon={PeopleAltIcon} title='People & user groups'/>
            <SidebarOptions Icon={AppsIcon} title='Apps'/>
            <SidebarOptions Icon={FileCopyIcon} title='File browser'/>
            <SidebarOptions Icon={ExpandLessIcon} title='Show less'/>
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title='Channels'/>
            <hr />
            <SidebarOptions Icon={AddIcon} title='Add channel'/>

           {channels.map((channel)=>{
               return (
                 <SidebarOptions title={channel.name} id={channel.id}/>
               )
           })}
        </div>
    )
}

export default Sidebar
