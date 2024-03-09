import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { useGlobalContex } from "../../utils/ContextApi";

export const NavBar = () => {
  const authUser = useGlobalContex();

  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "black" : ""
    };
  };
  return (
    <div className={styles.navbarContainer}>
      {authUser?.user ? (
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
      {authUser?.user ? (
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
      {authUser?.user ? (
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
      {authUser?.user ? (
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
