import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../Store/actions/action";
const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "100%",
  },
  form: {
    padding: "1rem",
    display: "flex",
    width: "100%",
    maxWidth: "30rem",
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
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(signin(formData, history));
  };
  return (
    <Grid item className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
        <TextField
          label="Email"
          className={classes.field}
          type="email"
          id="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          className={classes.field}
          label="Password"
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
        <div className={classes.actions}>
          <div className="form-check">
            <input
              id="remeberme"
              name=""
              type="checkbox"
              className="form-check-input"
              value=""
            />
            <label id="_label" className="form-check-label" htmlFor="remeberme">
              {" "}
              Remember me
            </label>
          </div>
          <a href="/signup">Forgot your password?</a>
        </div>
      </form>
    </Grid>
  );
};

export default LoginForm;
