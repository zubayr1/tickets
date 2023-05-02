import React from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'
import { useState } from 'react';

function Signup() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const [key, setKey] = useState('');

  
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



  function handlesubmit()
  {
    if ((fullname!=="" && username!=="" && password!=="" && key!=="") && (password===confpassword))
    {
        console.log(username);
        console.log(password);
    }
    
    
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
          
        </Grid>
        </div>
  )
}

export default Signup