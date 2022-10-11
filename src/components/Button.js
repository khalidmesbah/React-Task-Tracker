import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button style={{ color: `${color}` }} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};
Button.defaultPrps = {
  color: "steelblue",
  text: "Add",
};
Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
