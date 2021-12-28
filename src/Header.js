import React from 'react'
import './Header.css'
import {Avatar} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <Avatar
                    className='header_avatar'
                    alt='marcos'
                    src=''
                    />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search Marcos Ochieng...'/>
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header 