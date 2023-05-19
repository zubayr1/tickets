import React from 'react'
import { useEffect } from 'react';
import { useNavigate  } from "react-router-dom";

function Home() {
  const userinfo = localStorage.getItem('user');

  const navigate = useNavigate();

  useEffect(() => {    
    if ((userinfo!==null) && (userinfo!=="null") && (userinfo!==""))
    {
      navigate('/dashboard');
    }
    else
    {
      navigate('/register');
    }

  }, [userinfo, navigate]);


  return (
    <div>home</div>
  )
}

export default Home