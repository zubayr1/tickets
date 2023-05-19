import React from 'react'
import { useEffect } from 'react';
import { useNavigate  } from "react-router-dom";

function Home() {
  const userinfo = localStorage.getItem('user');

  const navigate = useNavigate();

  useEffect(() => {    
    console.log(userinfo);
    if ((userinfo!==null) || (userinfo!=="null"))
    {
      navigate('/dashboard');
    }
    else
    {
      navigate('/register');
    }

  });


  return (
    <div>home</div>
  )
}

export default Home