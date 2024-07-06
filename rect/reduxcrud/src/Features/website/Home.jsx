import React from "react";
import { useEffect, useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { user_delete, user_get, user_update } from "../UserSlice";

function Home() {
  const redirect = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(user_get());
  },[]);

  const {user} = useSelector((state) => {
    return state.user;
  });

  const [formvalue, setformvalue] = useState({
    id:"",
    fname: "",
    lname: "",
    email: "",
   
  });

  const edithandle = (id) => {
    const edit_data = user.filter((value) => {
      return value.id === id;
    });
    console.log(edit_data[0]);
    setformvalue(edit_data[0]);
  };

  const changehandle = (e) => {
    setformvalue({ ...formvalue, [e.target.fname]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.fname === "") {
      toast.error("name field is required");
      result = false;
      return false;
    }
    if (formvalue.lname === "") {
      toast.error("name field is required");
      result = false;
      return false;
    }
    if (formvalue.email === "") {
      toast.error("name field is required");
      result = false;
      return false;
    }
    if (formvalue.status === "") {
      toast.error("name field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submihandle = async (e) => {
    e.preventDefault();
    if (validation()) {
      dispatch(user_update(formvalue));
      toast.success("user updated success");
      setformvalue({ ...formvalue, fname: "", lname: "", email: "" });
      return redirect("/");
    }
  };

  const stauts_user = (id) => {
    const edit_data = user.filter((value) => {
      return value.id === id;
    });
    console.log(edit_data[0]);
    if (edit_data[0].status === "unblock") {
      dispatch(user_update({ id: edit_data[0].id, status:"block" }));
      toast.success("user Block Sucess");
    } else {
      dispatch(user_update({ id: id, status:"unblock" }));
      toast.success("user block sucesss");
    }
  };
  return (
    <>
      <div className="container">
       <NavLink className={"nav-link btn btn-primary float-end mb-5 mt-5"} to={"/Add_user"}>ADD</NavLink>
        <h2>Bordered Table</h2>
        <table className="table table-bordered text-dark">
          <thead>
            <tr>
            <th style={{ textAlign: "center" }}>Id</th>
              <th style={{ textAlign: "center" }}>UserFirstname</th>
              <th style={{ textAlign: "center" }}>UserLastname</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td align="center">
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => {
                          dispatch(user_delete(item.id));
                          toast.success("User Delete Success");
                        }}>
                        Delete
                      </button>
                      <button
                        className="btn btn-primary m-1"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        onClick={() => edithandle(item.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-primary m-1"
                        onClick={() => {
                          return redirect("/Home" + item.id);
                        }}
                      >
                        View                     
                         </button>
                      <button
                        className="btn btn-success m-1"
                        onClick={() => stauts_user(item.id)}
                      >
                        {item.status}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* modal */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Edit User</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form action="" method="post" onSubmit={submihandle}>
                <div className="mb-3 mt-3">
                  <label htmlFor="fname" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    value={formvalue.fname}
                    onChange={changehandle}
                    className="form-control"
                    placeholder="Enter firstName"
                    name="fname"/>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="lname" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    value={formvalue.lname}
                    onChange={changehandle}
                    className="form-control"
                    placeholder="Enter last name"
                    name="lname"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={formvalue.email}
                    onChange={changehandle}
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="status" className="form-label">
                    Status:
                  </label>
                  <input
                    type="text"
                    value={formvalue.status}
                    onChange={changehandle}
                    className="form-control"
                    name="status"
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
