import React from 'react';
import AsideBar from './AsideBar';
import HeaderApp from './HeaderApp';
import RightBar from './RightBar';
import "./Layout.css";

export default function Layout({ children }) {
    return (
        <div className='container'>
            <HeaderApp />
            <div className='content'>
                <div className='asidebar'>
                    <AsideBar />
                </div>
                <div className='article'>
                    {children}
                </div>
                <div className='list'>
                    <RightBar />
                </div>
            </div>
        </div>
    )
}
