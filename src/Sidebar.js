import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
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
        </div>
    )
}

export default Sidebar