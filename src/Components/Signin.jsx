import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // function for submitting the form
  const submit = async (e) => {
    e.preventDefault();
    setLoading("Hang on as we log you in");
    setError(""); // Clear any previous error

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      // Making the POST request to the API
      const response = await axios.post(
        "https://shellynjeri.pythonanywhere.com/api/signin",
        data
      );

      // Check if the response contains a user
      if (response.data && response.data.user) {
        // Store the user data in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to homepage or dashboard
        navigate("/");
      } else {
        // If no user in the response, show an error
        setError(response.data.message || "Invalid credentials.");
      }
    } catch (error) {
      setLoading(""); // Clear loading state on error

      // Handle errors from the server or network
      if (error.response) {
        // Server responded with an error
        setError(error.response.data.message || "An error occurred during signin.");
      } else {
        // Network or other error
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="row justify-content-center mt-4 text-center">
      <hr />
      <div className="col-md-5 signupandin p-4">
        <h2>Signin</h2>
        <form onSubmit={submit}>
          <span className="text-info">{loading}</span>
          <span className="text-danger">{error}</span>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-secondary w-100">
            Signin
          </button>
          <br />
        </form>
        <p>
          Don't have an Account? <Link to={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
