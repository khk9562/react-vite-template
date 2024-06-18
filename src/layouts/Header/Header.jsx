import PropTypes from "prop-types";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Nav />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
