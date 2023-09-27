import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const [task, setTask] = useState("");
  const { productid } = useParams();
  useEffect(() => {
    fetch("http://localhost:7000/products/" + productid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTask(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className=" container ">
      <div className=" card">
        <div className="card-title">
          <h1>Task Details</h1>
        </div>

        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>ID</label>
              <h3> {task.id}</h3>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <h3> {task.name}</h3>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Due Date</label>
              <h3> {task.duedate}</h3>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>status</label>
              <h3> {task.status}</h3>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Description</label>
              <p> {task.des}</p>
            </div>
          </div>

          <Link to="/" className="btn btn-success">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Details;
