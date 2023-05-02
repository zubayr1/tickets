import React from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleusername(e)
  {
    setUsername(e);
  }

  function handlepassword(e)
  {
    setPassword(e);
  }

  return (
    <div>     
        <Grid centered>    
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Input fluid type='username' placeholder='Username' onChange={e => handleusername(e.target.value)}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={4}>            
            <Grid.Column>
              <Input fluid type='password' placeholder='Password' onChange={e => handlepassword(e.target.value)}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={16}>            
            <Grid.Column>
              <Button primary>Submit</Button>
            </Grid.Column>            
          </Grid.Row>
        </Grid>
    </div>
  )
}

export default Login