import React, { useState, useEffect } from 'react'

import "./styles/LandingPage.css"
const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(item => setData(item.users))
  }, []);
 
  return (
    <div className='landing-container'>
      <div className='user-account-cont'>
        <div className='select-user'>Select an account</div>
      <div className="user-accounts-container">
      {data.map( user => (
        <div key={user.id} className="user-card">
          <img src={user.profilepicture} alt="User profile" />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default LandingPage
