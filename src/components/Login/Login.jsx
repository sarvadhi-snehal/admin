import GoogleSignin from "./GoogleLogin";
import LoginForm from "./LoginForm";
import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
  root : {
    display: "flex",
    alignItems : "center",
    justifyContent : "center",  
    flexDirection : "column",

height :'100vh'
  }
}))
const Login = () => {
  const classes = useStyles()
  return (
    <Grid container  className={classes.root}>
         
      <LoginForm />
      <GoogleSignin />
    
  </Grid>
  )
}

export default Login
