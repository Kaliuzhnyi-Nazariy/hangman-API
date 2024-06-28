import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectHint } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

import "../tooltip/tooltip.css";
import Button from "./Button/Button";

type PropType = {
  numberOfIncorrectGuesses: number;
};

const Tooltip = ({ numberOfIncorrectGuesses }: PropType) => {
  const hint = useSelector(selectHint);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        position: "fixed",
        zIndex: 100,
        // padding: "0 5rem "
      }}
    >
      <Button style={{ marginLeft: "32px" }} onClick={handleBackClick}>
        back
      </Button>
      {numberOfIncorrectGuesses >= 5 ? (
        <div className="tooltip-container">
          <IoMdSearch />
          <span className="tooltip-text">{hint}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tooltip;
