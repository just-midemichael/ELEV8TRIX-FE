import ColoredButton from "../shared/button/coloredButton/ColoredButton";
import styles from "./HamurgerMenu.module.scss";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "black" : ""
    };
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.linkBox}>
        <NavLink
          to={"/"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/courses"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/courses")}
        >
          Courses
        </NavLink>
        <NavLink
          to={"/about"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/about")}
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
      <div className={styles.signinBox}>
        <ColoredButton text={"Sign In"} link={"/user"} target={""} />
      </div>
    </div>
  );
};
