import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../../Store/actions/action";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const history = useHistory();
  const [avatarFile, setAvatarFile] = useState();
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    term: "",
    email: "",
    password: "",
    password2: "",
    avatar: null,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    term: Yup.string().required("You need to agre with Terms"),
    email: Yup.string().email("invalid email").required("Required"),
    password: Yup.string().required("required").min(6),
    password2: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const validateavatarFile = (file) => {
    let error;
    if (!avatarFile) {
      error = "Image Required";
    }
    return error;
  };
  var formData = new FormData();
  const onSubmit = (values) => {
    // console.log(values);

    formData.append("name", values.firstName);
    formData.append("password", values.password);
    formData.append("email", values.email);
    formData.append("avatar", values.avatar);
    //   name: ,
    //   email: values.email,
    //   password: values.password,
    //   avatar: values.avatar,

    dispatch(signup(formData, history));
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
                  name="firstName"
                  placeholder="Name"
                  component={TextField}
                />
                {/* <ErrorMessage name="firstName" /> */}
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
              </div>
              <div className="form-control">
                <Field
                  type="password"
                  name="password2"
                  placeholder="Type Password again"
                  component={TextField}
                />
                {/* <ErrorMessage name="password2" /> */}
              </div>

              <div className="form-control">
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
                      </>
                    );
                  }}
                </Field>
                <label htmlFor="avatar" className="bg-info btn w-50 text-white">
                  Select Avatar
                </label>
                <ErrorMessage name="avatar">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-control  flex-row  ">
                <Field
                  type="checkbox"
                  name="term"
                  id="term"
                  className="form-check-input "
                />
                <label htmlFor="term" className="form-check-label ms-2">
                  I agree to all Terms
                </label>
                <ErrorMessage name="term">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-action  m-auto w-100 p-3">
                <button className="btn btn-primary rounded-pill" type="submit">
                  Submit
                </button>
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
