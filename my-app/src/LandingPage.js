import React, { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import myGifImage   from "./images/loading.gif"

import "./styles/LandingPage.css"
const LandingPage = ({setSelectedAccount}) => {

  const navigate = useNavigate();

  // const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
    
    navigate(`/profile/${account.id}`);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://panorbit.in/api/users.json');
        const data = await response.json();
        setData(data.users);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <div className='landing-container'>
      <div className='user-account-cont'>
        <div className='select-user'>Select an account</div>
      <div className="user-accounts-container">
      {
        loading ? (
         <img className='LoadingIcon' src={myGifImage }/>
        ) : 
      (data.map( user => (
        <div key={user.id} className="user-card" onClick={() => handleAccountSelect(user)}>
          <img src={user.profilepicture} alt="User profile" />
          <h3>{user.name}</h3>
        </div>
      )))}
    </div>
    </div>
    </div>
  )
}

export default LandingPage
