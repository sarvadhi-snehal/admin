import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../../Store/actions/action";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  const history = useHistory();
  const [avatarFile, setAvatarFile] = useState();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    checked: "",
    email: "",
    password: "",
    password2: "",
    avatar: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    checked: Yup.boolean()
      .oneOf([true], "Must Accept Terms and Conditions")
      .required("Must Accept Terms and Conditions"),
    email: Yup.string().email("invalid email").required("Required"),
    password: Yup.string().required("required").min(6),
    password2: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    // term: Yup.boolean().required("Required"),
  });
  const validateavatarFile = (file) => {
    let error;
    if (!avatarFile) {
      error = "Image Required";
    }
    return error;
  };
  // var formData = new FormData();
  const onSubmit = (values) => {
    dispatch(signup(values, history));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formik) => {
        return (
          <div className="form-container ">
            <Form className="form p-3 bg-white">
              <h4 className="text-center fw-normal">Sign Up</h4>
              <div className="form-control">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  component={TextField}
                />
                {/* <ErrorMessage name="name" /> */}
              </div>

              <div className="form-control">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  component={TextField}
                />
                {/* <ErrorMessage name="email" /> */}
              </div>
              <div className="form-control">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={TextField}
                />
                {/* <ErrorMessage name="password" /> */}

                <Field
                  type="password"
                  name="password2"
                  placeholder="Type Password again"
                  component={TextField}
                />
                {/* <ErrorMessage name="password2" /> */}
              </div>

              <div className="form-contro flex-row">
                <Field type="file" name="avatar" validate={validateavatarFile}>
                  {({ field, form }) => {
                    return (
                      <>
                        <input
                          type="file"
                          id="avatar"
                          accept="image/*"
                          onChange={(event) => {
                            form.setFieldValue(
                              "avatar",
                              event.currentTarget.files[0]
                            );
                            setAvatarFile(event.currentTarget.files[0]);
                          }}
                          className="d-none"
                        />
                      </>
                    );
                  }}
                </Field>
                <div>
                  <label
                    htmlFor="avatar"
                    className="bg-white shadow btn text-secondary "
                  >
                    {avatarFile ? (
                      <span>Selected Avatar</span>
                    ) : (
                      <span>Select Avatar</span>
                    )}
                  </label>
                  <ErrorMessage name="avatar">
                    {(msg) => (
                      <div
                        className="text-danger"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                {avatarFile && (
                  <img
                    width={100}
                    height={100}
                    src={window.URL.createObjectURL(avatarFile)}
                    alt="avatar"
                    className=""
                    required
                  />
                )}
              </div>
              <div className="form-control  ">
                <Field
                  type="checkbox"
                  name="checked"
                  component={CheckboxWithLabel}
                  // error={formik.errors.checked}
                  Label={{ label: " I agree to all Terms" }}
                />
                <ErrorMessage name="checked">
                  {(msg) => (
                    <div
                      className="text-danger "
                      style={{ fontSize: "0.8rem" }}
                    >
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="form-action  m-auto w-100 p-3">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </div>

              <p className="text-center">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignUp;
