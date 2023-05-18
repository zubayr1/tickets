import React from 'react'
import { Image, Grid, Segment } from 'semantic-ui-react'
import logo from '../assets/pagenotfound.jpg'

function Pagenotfound() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Segment>
            <Grid centered>
                <Grid.Row>
                    <Image src={logo} size='large' circular />
                </Grid.Row>

                <Grid.Row>
                    <p class="FuturaFont" style={{color:'#104161', fontWeight:'bolder'}}>Looks like this page does not exist!</p>
                </Grid.Row>
            </Grid>

        </Segment>        
        
    </div>
  )
}

export default Pagenotfound