import React from 'react'
import { Button, Grid, Input, Message } from 'semantic-ui-react'
import { useState } from 'react';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase-config';

function Signup() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const [key, setKey] = useState('');

  const [messageType, setMessageType] = useState(0);
  
  function handlefullname(e)
  {
    setFullname(e);
  }

  function handleusername(e)
  {
    setUsername(e);
  }

  function handlepassword(e)
  {
    setPassword(e);
  }

  function handleconfpassword(e)
  {
    setConfPassword(e);
  }

  function handlekey(e)
  {
    setKey(e);
  }

  const signingup = async() =>
  {
    try
    {
      await createUserWithEmailAndPassword(auth, username, password);
    }
    catch (error)
    {
      setMessageType(4);
    }
    
  }


  function handlesubmit()
  {
    if (fullname!=="" && username!=="" && password!=="" && key!=="")
    {
      if((password===confpassword) && password.length>=6)
      {
        //register
        signingup();
        setMessageType(1);
      }
      else if (password!==confpassword)
      {
        setMessageType(2);
      }
      else if (password.length<6)    
      {
        setMessageType(3);
      }            
    }   
    
  }

  let display_message = 
  <div>

  </div>;

  if(messageType===1)
  {
    display_message = 
    <Message positive>
      <Message.Header>Sign Up Done</Message.Header>
        <p>
          Please login with the credentials
        </p>
    </Message>
  }
  else if (messageType===2)
  {
    display_message = 
    <Message negative>
      <Message.Header>Passwords are different</Message.Header>
        <p>Please fix the passwords and try again</p>
    </Message>
  }
  else if (messageType===3)
  {
    display_message = 
    <Message negative>
      <Message.Header>Password is too short</Message.Header>
        <p>Please increase password length and try again</p>
    </Message>
  }
  else if (messageType===4)
  {
    display_message = 
    <Message negative>
      <Message.Header>Authentication failed</Message.Header>
        <p>Something went wrong while signing up. Please try again</p>
    </Message>
  }
  
  return (
    <div>            
        <Grid padded centered>  
          
            <Grid.Row centered>
              <Grid.Column>
              <p class="FuturaFont" style={{color:'#000000', fontSize:'20px', fontWeight:'bold'}}>Signup</p>
              </Grid.Column>
              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column>
                <Input fluid type='username' placeholder='Full Name' onChange={e => handlefullname(e.target.value)}/>
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

            <Grid.Row centered>            
                <Grid.Column>
                <Input fluid type='password' placeholder='Confirm Password' onChange={e => handleconfpassword(e.target.value)}/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>            
                <Grid.Column>
                <Input fluid type='password' placeholder='Master Key' onChange={e => handlekey(e.target.value)}/>
                </Grid.Column>
            </Grid.Row>

                     
            <Grid.Row>
              <Button primary onClick={()=> handlesubmit()}>Submit</Button>
            </Grid.Row>   

            <Grid.Row>
              {display_message}  
            </Grid.Row>         
          
        </Grid>
    </div>
  )
}

export default Signup