import PropTypes from "prop-types";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/counter"}>카운터</Link>
        </li>
        {children}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
