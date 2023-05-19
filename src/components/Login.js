import React from 'react'
import { Button, Grid, Input, Message } from 'semantic-ui-react'
import { useState } from 'react';
import { useNavigate  } from "react-router-dom";

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase-config';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [messageType, setMessageType] = useState(0);

  const navigate = useNavigate();

  function handleusername(e)
  {
    setUsername(e);
  }

  function handlepassword(e)
  {
    setPassword(e);
  }

  
  const handlesubmit = async() =>
  {
    if (username!=="" && password!=="")
    {
      //login        

        try
        {
          await signInWithEmailAndPassword(auth, username, password);

          localStorage.setItem('user', auth.currentUser.email);

          navigate('/dashboard');
        }
        catch (error)
        {
          setMessageType(2);
        }
    }
    
    
  }

  let display_message = 
  <div>

  </div>;

if(messageType===2)
{
  display_message = 
  <Message negative>
    <Message.Header>Authentication failed</Message.Header>
      <p>
        Something went wrong while login. Please try again
      </p>
  </Message>
}

  return (
    <div> 
           
        <Grid padded centered>  
          
            <Grid.Row centered>
              <Grid.Column>
              <p class="FuturaFont" style={{color:'#000000', fontSize:'20px', fontWeight:'bold'}}>Login</p>
              </Grid.Column>
              </Grid.Row>

            <Grid.Row centered>
              <Grid.Column>
                <Input fluid type='username' placeholder='Username' onChange={e => handleusername(e.target.value)}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>            
              <Grid.Column>
                <Input fluid type='password' placeholder='Password' onChange={e => handlepassword(e.target.value)}/>
              </Grid.Column>
            </Grid.Row>

                     
            <Grid.Row>
              <Button primary onClick={()=> handlesubmit()}>Submit</Button>
            </Grid.Row>  

            <Grid.Row>
                <Grid.Column floated='left' width={2}>
                </Grid.Column>

                <Grid.Column floated='right' width={6}>
                    <p class="FuturaFont" style={{color:'#104161', fontWeight:'bolder'}}>forgot password?</p>
                </Grid.Column>
              
            </Grid.Row>   

            <Grid.Row>
              {display_message}  
            </Grid.Row>         
          
        </Grid>
        </div>
  )
}

export default Login