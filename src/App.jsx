import { useEffect, useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import "modern-normalize";
import "./App.css";

const App = () => {
  const [feedbacks, setFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);
  return (
    <div>
      <h2>Sip Happens Café</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options
        updateFeedback={updateFeedback}
        setFeedbacks={setFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
