import React from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";

const Homepage = () => {
  return (
    <div className="home-hero">
      <h1>Small Town</h1>
      <p>Saving the world by saving your time</p>
      <p>Small Town helps you find a home that is perfect for your needs. We use data </p>
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
    </div>
  );
};

export default Homepage;
