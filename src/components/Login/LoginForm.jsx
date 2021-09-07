import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  form: {
    padding: "1rem",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    margin: 10,
    width: "100%",
  },
  btn: {
    width: "100%",
  },
  actions: {
    margin: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    " & span": {
      display: "flex",
      justifyContent: "space-between",
      marginRight: "1rem",
      alignItems: "center",
      "& > *": {
        margin: 2,
      },
    },
  },
});
const LoginForm = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <form className={classes.form}>
        <TextField
          label="Email"
          className={classes.field}
          type="email"
          id="username"
          required

          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          className={classes.field}
          label="Password"
          type="password"
          id="password"
          required
        />

        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
        <div className={classes.actions}>
          <span>
            {" "}
            <input type="checkbox" />
            Remember me
          </span>
          <a href="#">Forgot your password?</a>
        </div>
      </form>
    </Grid>
  );
};

export default LoginForm;
