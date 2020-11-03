import React, {useState} from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

// Create child Statcard component here
function StatCard(props) {
  return(
  // define component here
  <div className="stat-card">
    <div className="stat-line">
      <span>{props.icon}</span>
      <strong>{props.label}</strong>
    </div>
    <p>{props.number.toLocaleString()}</p>
  </div>
  );
  // define props of icon label and number
}

function App() {
  return (
    <div className="App">
      {/*<h2>Use components and props in React</h2>*/}
      <StatCard icon=" " label="Points" number={3000} />
      <StatCard icon=" " label="Lighting" number={3700} />
      <StatCard icon=" " label="Rank" number={325000} />
      <StatCard icon=" " label="Diamonds" number={9860} />

      {/* Use child component x4 here */}

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
