import React, { useEffect, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
const Productlist = () => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  const View = (id) => {
    navigate("/product/view/" + id);
  };
  const Update = (id) => {
    navigate("product/update/" + id);
  };
  const remove = (id) => {
    if (window.confirm("Do you want to Remove")) {
      fetch("http://localhost:7000/products/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          window.location.reload();
          alert("Sucessfully Removed");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:7000/products/")
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setTask(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card-title">
        <h1>Task List </h1>
      </div>
      <div className="card-body">
        <Link className="btn btn-success" to="/create/product">
          {" "}
          Create New Task
        </Link>
        <table className="table table-bordered">
        {/* NOTE Gidy->Guideline  table element*/}
          <thead className="bg-dark text-white">
            <tr>
              <td>ID</td>
              <td>Task</td>
              <td>DueDate</td>
              <td>Description</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.duedate}</td>
                <td>{item.des}</td>
                <td>{item.status}</td>
                <td>
                  <a
                    className="btn btn-success"
                    onClick={() => {
                      View(item.id);
                    }}
                  >
                    View
                  </a>
                  <a
                    className="btn btn-primary"
                    onClick={() => {
                      Update(item.id);
                    }}
                  >
                    {" "}
                    Update
                  </a>
                  <a
                    className="btn btn-danger"
                    onClick={() => {
                      remove(item.id);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Productlist;
