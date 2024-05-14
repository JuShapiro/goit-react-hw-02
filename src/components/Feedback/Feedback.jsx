import css from "./Feedback.module.css";
const Feedback = ({ feedbacks }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p> Bad: {feedbacks.bad}</p>
    </div>
  );
};

export default Feedback;
