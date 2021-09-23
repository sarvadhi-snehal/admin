import { TextField as MuiTextField } from "formik-material-ui";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

const TextField = () => (
  <MuiTextField
    name="customized"
    label="Outlined"
    variant="outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    }}
  />
);
export default TextField;
