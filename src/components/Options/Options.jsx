import css from "./Options.module.css";
const Options = ({ updateFeedback, setFeedbacks, totalFeedback }) => {
  const handleResetButton = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleResetButton}>Reset</button>}
    </div>
  );
};

export default Options;
