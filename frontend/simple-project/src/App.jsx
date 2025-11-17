import { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup Successful!");
        setFormData({ firstName: "", lastName: "", email: "", password: "" });
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-card">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="field">
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <label>First Name</label>
          </div>

          <div className="field">
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <label>Last Name</label>
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="field">
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
};

export default App;
