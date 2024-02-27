import { useState } from "react";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [user] = useState(false);
  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "black" : ""
    };
  };
  return (
    <div className={styles.navbarContainer}>
      {user ? (
        false
      ) : (
        <NavLink
          to={"/"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/")}
        >
          Home
        </NavLink>
      )}
      <NavLink
        to={"/courses"}
        className={styles.list}
        style={activeStyle}
        onClick={() => (window.location.href = "/courses")}
      >
        Courses
      </NavLink>
      {user ? (
        false
      ) : (
        <NavLink
          to={"/about"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/about")}
        >
          About Us
        </NavLink>
      )}
      {user ? (
        false
      ) : (
        <NavLink
          to={"/contact"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/contact")}
        >
          Contact
        </NavLink>
      )}
      {user ? (
        <NavLink
          to={"/my_learning"}
          className={styles.list}
          style={activeStyle}
          onClick={() => (window.location.href = "/my_learning")}
        >
          My learning
        </NavLink>
      ) : (
        false
      )}
    </div>
  );
};
