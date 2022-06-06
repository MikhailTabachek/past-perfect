import React from "react"
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"

import Posts from "./components/Posts/Posts"
import Forms from "./components/Posts/Forms"
import memories from './images/past-perfect.png'


const App = () => {
  return(
    <Container maxwidth="lg"> 
      <AppBar position="ststic" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid containet justify="space-between" spacing='3'>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App