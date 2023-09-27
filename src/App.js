import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// npm install  -g json -server
// npm install react-router-dom
// npm install react react-dom react-router-dom

import Productlist from "./Productlist";
import Create from "./Create";
import Details from "./Details";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productlist />}></Route>
          <Route path="/create/product" element={<Create />}></Route>
          <Route path="/product/view/:productid" element={<Details/>} ></Route>
          <Route path="product/update/:productid" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
