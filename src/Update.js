import { useNavigate, Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
const Update = function () {
  const { productid } = useParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [duedate, setDate] = useState("");
  const [des, setDes] = useState("");
  const [status, setStatus] = useState("");
  const [validate, setValidate] = useState(true);
  const pro = { name, duedate, des, status };

  useEffect(() => {
    fetch("http://localhost:7000/products/" + productid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setDate(resp.duedate);
        setDes(resp.des);
        setStatus(resp.status);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:7000/products/" + productid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(pro),
    })
      .then((res) => {
        alert("Saved Successfully ");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2> Product Edit</h2>
              </div>

              {/*-------------------------------------- NOTE Gidy->Guideline  CRUD AXIOS to Fetch data----------------------------*/}
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => setValidate(true)}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                      {validate && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>DueDate</label>
                      <input
                        value={duedate}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        value={des}
                        className="form-control"
                        onChange={(e) => setDes(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      {/*-------------------------------------- NOTE Gidy->Guideline  DROP DOWN----------------------------*/}
                      <select
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                      >
                        <option value="Ongoing">Ongoing</option>
                        <option value="Finished" selected>
                          Finished
                        </option>
                        <option value="Yet to start">Yet to start</option>
                      </select>
                    </div>
                  </div>

                  {/*-------------------------------------- NOTE Gidy->Guideline  BUTTON BEST PRACTICE----------------------------*/}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger" type="submit">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Update;
