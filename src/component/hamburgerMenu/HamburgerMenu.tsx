import styles from "./HamurgerMenu.module.scss";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "red" : ""
    };
  };

  return (
    <div className={styles.menuContainer}>
      <NavLink
        to={"/"}
        className={styles.list}
        style={activeStyle}
        onClick={() => (window.location.href = "/")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/financial-litracy"}
        className={styles.list}
        style={activeStyle}
        onClick={() => (window.location.href = "/financial-litracy")}
      >
        Courses
      </NavLink>
      <NavLink
        to={"/faqs"}
        className={styles.list}
        style={activeStyle}
        onClick={() => (window.location.href = "/faqs")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={styles.list}
        style={activeStyle}
        onClick={() => (window.location.href = "/contact")}
      >
        Contact
      </NavLink>
    </div>
  );
};
