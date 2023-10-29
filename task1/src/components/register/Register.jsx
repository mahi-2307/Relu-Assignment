import React, { useState } from "react";
import "./Register.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text,setText] = useState(false)
  const handleRegistration = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
      setText(!text)
      navigate("/");
    } catch (error) {
      console.error("Registration failed", error);
    }
    
  };

  return (
    <section className="regSection">
    <div className="register">
      <div className="container">
      <h2>Registration</h2>
      <div className="input">

      
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
      {text && <p>Click on Login</p>}
      </div>
      <p>
        Already registered?
        <span>
          <Link to="/">Login</Link>
        </span>
      </p>
      </div>
    </div>
    </section>
  );
}

export default Register;
