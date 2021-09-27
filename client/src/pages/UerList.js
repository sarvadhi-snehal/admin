import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  createUser,
  deleteUser,
  getUsers,
  editUser,
} from "../Store/actions/action";
import { useDispatch, useSelector } from "react-redux";
const UerList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const usersData = useSelector((state) => state.users);
  const [value, setValue] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    age: "",
    avatar: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("Invalid Email").required("email"),
    age: Yup.number("Invalid digit").required("required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    if (!values._id) {
      console.log("create");
      dispatch(createUser(values));
    } else {
      dispatch(editUser(values));
      console.log("edit");
    }
    resetForm();
  };
  useEffect(
    (usersData) => {
      dispatch(getUsers());
    },
    [dispatch]
  );

  const TextError = ({ children }) => {
    return <div className="text-danger">{children}</div>;
  };

  return (
    <section className="container-fluid">
      <article>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add user
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <Formik
              initialValues={value || initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnChange={true}
              validateOnBlur={true}
              enableReinitialize
            >
              <Form className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add User
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-control">
                    <Field type="text" placeholder="name" name="name" />
                    <ErrorMessage name="name" component={TextError} />
                  </div>
                  <div className="form-control">
                    <Field type="text" placeholder="email" name="email" />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="form-control">
                    <Field type="file" name="avatar">
                      {({ field, form }) => {
                        return (
                          <input
                            type="file"
                            // name="avatar"

                            onChange={(event) => {
                              console.log(event.currentTarget.files[0]);
                              form.setFieldValue(
                                "avatar",
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                        );
                      }}
                    </Field>
                    <ErrorMessage name="file" component={TextError} />
                  </div>
                  <div className="form-control">
                    <Field type="text" placeholder="age " name="age" />
                    <ErrorMessage name="age" component={TextError} />
                  </div>
                </div>
                <div className="modal-footer">
                  <input type="reset" value="Reset" />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {value?._id ? "Update " : "Save"}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </article>
      <article className="overflow-scroll">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, i) => (
              <tr key={user._id}>
                <th scope="row">
                  <img
                    className="img-fluid"
                    width={150}
                    src={`http://localhost:4000/${user.avatar}`}
                    alt="user"
                  />{" "}
                  {user.name}
                </th>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => dispatch(deleteUser(user._id))}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue(user)}
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    edit user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default UerList;
