import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); 
    } catch (err) {
      setError(err);
      console.error("Login failed", err);
    }
  };
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      try {
        if (user) {
          setUser(user);
          console.log("User is logged in:", user.email);
  
        }
      } catch (error) {
         setUser(null);
         console.log(error);
       }
      
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <section className="loginSection">
    <div className="login">
      <div className="container">
        <h2>Login</h2>
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
          {error && <p>User doesn't exist</p>}
          <button onClick={handleLogin}>Login</button>
          <p style={{"font-size":"12px"}}>Test Account: test1@gmail.com<br/>pass: test@123</p>
        </div>
        <p>
          New?
          <span>
            <Link to="/register"> Click to register</Link>
          </span>
        </p>
      </div>
    </div>
    </section>
  );
}

export default Login;
