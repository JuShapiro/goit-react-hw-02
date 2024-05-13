import "modern-normalize";
import { useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <div>
      <div className="description">
        <h2>Sip Happens Café</h2>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>

      <div className="options">
        <Options />
      </div>
      <div className="feedback">
        <Feedback />
      </div>
    </div>
  );
};

export default App;
