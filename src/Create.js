import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {

  {/*----------------------------- NOTE Gidy->Guideline  CRUD AXIOS element--------------------------------------------*/}
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [duedate, setDate] = useState("");
  const [des, setDes] = useState("");
  const [status, setStatus] = useState("Ongoing");
  const [validate, setValidate] = useState(true);
  const pro = { name, duedate, des, status };
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    {/*-------------------------------------- NOTE Gidy->Guideline  CRUD AXIOS to Fetch data----------------------------*/}
    fetch("http://localhost:7000/products/", {
      method: "POST",
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
                {/*-------------------------------------- NOTE Gidy->Guideline  REACT INPUTS----------------------------*/}
                <h2> Task List</h2>
              </div>
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
                      {name.length == 0 && validate && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Due Date</label>
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
{/*-------------------------------------- NOTE Gidy->Guideline  DROP DOWN----------------------------*/}
                  <div className="col-lg-12">
                    <div className="form-check">
                      <select
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                      >
                        <option value="Finished">Finished</option>
                        <option value="Ongoing" selected>
                          Ongoing
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
export default Create;
