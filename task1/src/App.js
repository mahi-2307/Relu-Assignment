import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./task2/homepage/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
