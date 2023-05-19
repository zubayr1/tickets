import React from 'react'
import {signOut} from 'firebase/auth';
import {auth} from '../firebase-config';
import { Button } from 'semantic-ui-react'
import { useNavigate  } from "react-router-dom";


function Dashboard() {

  const navigate = useNavigate();

  const handlesignout = async()=>
  {
    await signOut(auth);
    localStorage.setItem('user', "null");
    navigate('/register');
  }
  return (
    <div>
      <Button onClick={()=> handlesignout()}>logout</Button>
    </div>
  )
}

export default Dashboard