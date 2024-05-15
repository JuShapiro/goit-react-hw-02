import css from "./Options.module.css";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { RxReset } from "react-icons/rx";

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
      <button onClick={() => updateFeedback("good")}>
        Good <FcLike />
      </button>
      <button onClick={() => updateFeedback("neutral")}>
        Neutral <FcLikePlaceholder />
      </button>
      <button onClick={() => updateFeedback("bad")}>
        Bad <FcDislike />
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleResetButton}>
          Reset <RxReset />
        </button>
      )}
    </div>
  );
};

export default Options;
