import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, setShowAddNewTask, showAddNewTask }) => {
  const location = useLocation();
  const onClick = (e) => {
    setShowAddNewTask((prev) => !prev);
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={`${showAddNewTask ? "red" : "green"}`}
          text={`${showAddNewTask ? "close" : "add"}`}
          onClick={onClick}
        ></Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
