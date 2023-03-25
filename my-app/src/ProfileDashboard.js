import React, { useState, useRef,useEffect } from 'react'
import "./styles/ProfileDashboard.css"
import Comming from './Comming'
import Profile from "./Profile"
import { Link } from 'react-router-dom';

const ProfileDashboard = ({ selectedAccount }) => {
    const [navName, setNavName] = useState("Profile")
    const profileDiv = useRef(null);
    const postDiv = useRef(null);
    const galleryDiv = useRef(null);
    const todoDiv = useRef(null);
    const dropdownRef = useRef(null);

    const handleNav = (ref) => {
        setNavName(ref.current.innerHTML)
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      });
    return (
        <div className='profile-container'>
            <div className='nav-bar'>
                <h4 className={navName === 'Profile' ? 'active' : ''} ref={profileDiv} onClick={() => handleNav(profileDiv)}>Profile</h4>
                <hr />
                <h4 className={navName === 'Post' ? 'active' : ''} ref={postDiv} onClick={() => handleNav(postDiv)}>Post</h4>
                <hr />
                <h4 className={navName === 'Gallery' ? 'active' : ''} ref={galleryDiv} onClick={() => handleNav(galleryDiv)}>Gallery</h4>
                <hr />
                <h4 className={navName === 'ToDo' ? 'active' : ''} ref={todoDiv} onClick={() => handleNav(todoDiv)}>ToDo</h4>
            </div>
            <div className='right-section'>
                <div className="head">
                    <h3>{navName}</h3>
                    <div className='top-head'  onClick={handleToggleDropdown} >
                        <img src={selectedAccount?.profilepicture} alt="profile Image" className='profile-photo' />
                        <span>{selectedAccount?.name}</span>
                    </div>
                    {showDropdown && (
                        <div className="dropdown-menu" ref={dropdownRef}>
                            <img src={selectedAccount?.profilepicture}  />
                            <b>{selectedAccount?.name}</b>
                            <p>{selectedAccount?.email}</p>
                            <Link to="/">  <button className='sign-out-btn'>Sign out</button></Link>
                        </div>
                    )}
                </div>
                <div className="body-sec">

                    {
                        navName === "Profile" ? <Profile selectedAccount={selectedAccount} /> : <Comming />
                    }

                </div>
            </div>
        </div>
    )
}

export default ProfileDashboard
