import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import * as toastr from "toastr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUser,
  deleteUser,
  getUsers,
  editUser,
} from "../Store/actions/action";
import { useDispatch, useSelector } from "react-redux";
const UerList = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // const history = useHistory();
  const usersData = useSelector((state) => state.users);
  const [value, setValue] = useState(null);
  const tostOption = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const added = () => toast.success("User sucessfully added", tostOption);
  const deleted = () => toast.error("User sucessfully deleted", tostOption);
  const updated = () => toast.info("user sucessfully updated", tostOption);

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

  const onSubmit = (values, onSubmitProps) => {
    if (!values._id) {
      dispatch(createUser(values));
      added();
    } else {
      dispatch(editUser(values));
      updated();
    }
    onSubmitProps.resetForm();
    setShowModal(false);
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

  // toastr.options = {
  //   closeButton: true,

  //   newestOnTop: true,
  //   progressBar: true,
  //   positionClass: "toast-top-right",
  //   preventDuplicates: true,
  //   onclick: null,
  //   showDuration: "300",
  //   hideDuration: "1000",
  //   timeOut: "5000",
  //   extendedTimeOut: "1000",
  //   showEasing: "swing",
  //   hideEasing: "linear",
  //   showMethod: "show",
  //   hideMethod: "fadeOut",
  // };

  return (
    <section className="container-fluid" style={{ minHeight: "60vh" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="m-4 p-4 bg-white">
        <article className="">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setValue(null);
              setShowModal(!showModal);
            }}
          >
            Add user
          </button>

          {showModal && (
            <div className=" modal-main   ">
              <div
                className="modal-overlay"
                onClick={() => setShowModal(false)}
              />
              <div className="modal-center">
                <Formik
                  initialValues={value || initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                  validateOnChange={true}
                  validateOnBlur={true}
                  enableReinitialize
                >
                  {(formik) => {
                    return (
                      <Form className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {value?._id ? "Update User" : "Add User"}
                          </h5>
                          <button
                            type="button"
                            className="btn-close "
                            onClick={() => setShowModal(false)}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="p-2">
                            <Field
                              type="text"
                              placeholder="name"
                              className="form-control"
                              name="name"
                            />
                            <ErrorMessage name="name" component={TextError} />
                          </div>
                          <div className="p-2">
                            <Field
                              className="form-control"
                              type="text"
                              placeholder="email"
                              name="email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div className="p-2">
                            <Field type="file" name="avatar">
                              {({ field, form }) => {
                                return (
                                  <input
                                    type="file"
                                    // name="avatar"
                                    className="form-control"
                                    onChange={(event) => {
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
                          <div className="p-2">
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="age "
                              name="age"
                            />
                            <ErrorMessage name="age" component={TextError} />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="reset"
                            className="btn btn-warning"
                            onClick={() => {
                              setValue(null);
                              formik.resetForm();
                            }}
                          >
                            Reset All
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-primary">
                            {value?._id ? "Update " : "Save"}
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          )}
        </article>
        <article className="overflow-auto ">
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
                  <th scope="d-flex">
                    <img
                      className="img-fluid rounded-circle"
                      width={100}
                      height={150}
                      // src= {`http://localhost:4000/${user.avatar}`}
                      src={user.avatar}
                      alt="user"
                    />
                    <label className="ms-4 mt-0 fw-normal fs-5">
                      {" "}
                      {user.name}
                    </label>
                  </th>
                  <td>
                    <p className="fs-6">{user.email}</p>
                  </td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                        deleted();
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(!showModal);
                        setValue(user);
                      }}
                      className="btn btn-info"
                    >
                      edit user
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </section>
  );
};

export default UerList;
