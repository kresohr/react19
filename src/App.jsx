import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  return (
    <div
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#31363f",
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <h2>Functional Arrow Component</h2>
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
