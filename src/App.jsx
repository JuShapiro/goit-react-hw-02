import { useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import "modern-normalize";
import "./App.css";

const App = () => {
  const [feedbacks, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  return (
    <div>
      <h2>Sip Happens Café</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options updateFeedback={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
