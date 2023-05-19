import React from 'react'

import {
    Divider,
    Grid,
    Segment,
  } from 'semantic-ui-react'

import Login from './login'
import Signup from './signup'

function Register() {

  return (
    <div>
        <Grid centered>
            <Grid.Row only='computer tablet'>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width:'80%'}}>
                    <Segment placeholder>
                        <Grid columns={2} stackable textAlign='center'>
                        <Divider vertical>Or</Divider>

                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Login/>
                            </Grid.Column>

                            <Grid.Column>
                                <Signup/>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Segment>
                </div>
            </Grid.Row>

        </Grid>
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', marginTop: '5%'}}>
            <Segment>
            <Grid centered>
                <Grid.Row centered only='mobile'>
                    <Login/>
                </Grid.Row>
                <Grid.Row>
                    <Divider horizontal>Or</Divider>
                </Grid.Row>
                <Grid.Row centered only='mobile'>
                    <Signup/>
                </Grid.Row>
            </Grid>
            </Segment>
        </div>
        
    </div>
  )
}

export default Register