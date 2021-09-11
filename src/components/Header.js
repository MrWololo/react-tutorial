import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "white",
};

export default Header;
