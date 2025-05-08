import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Used for navigation after successful signup

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we load your data");
    setSuccess("");
    setError("");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      data.append("password", password);

      const response = await axios.post("https://shellynjeri.pythonanywhere.com/api/signup", data);

      setLoading("");
      setSuccess(response.data.message);

      // Clear inputs on successful signup
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");

      // Redirect to homepage after success
      if (response.data.message) {
        navigate("/");
      }
    } catch (error) {
      setLoading("");
      
      // Correct error handling
      if (error.response) {
        // If error is from the server
        setError(error.response.data.message || "An error occurred during signup.");
      } else {
        // If error is not from the server (e.g., network error)
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="signupandin p-4 col-md-6 text-center">
        <h2>Sign up</h2>

        <form onSubmit={submit}>
          <span className="text-info">{loading}</span>
          <span className="text-success">{success}</span>
          <span className="text-danger">{error}</span>

          <input
            required
            type="text"
            placeholder="Enter Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            required
            type="email"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            required
            type="tel"
            placeholder="Enter Phone number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <input
            required
            type="password"
            placeholder="Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn bg-secondary">SignUp</button>
        </form>

        <p>Already have an account? <Link to={"/signin"}>Signin</Link></p>
      </div>
    </div>
  );
};

export default Signup;
