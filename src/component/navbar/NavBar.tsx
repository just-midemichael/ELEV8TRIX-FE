import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { useContexApi } from "../../utils/ContextApi";

export const NavBar = () => {
  const authUser = useContexApi();

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
        <NavLink to={"/"} className={styles.list} style={activeStyle}>
          Home
        </NavLink>
      )}
      <NavLink to={"/courses"} className={styles.list} style={activeStyle}>
        Courses
      </NavLink>
      {authUser?.user ? (
        false
      ) : (
        <NavLink to={"/about"} className={styles.list} style={activeStyle}>
          About Us
        </NavLink>
      )}
      {authUser?.user ? (
        false
      ) : (
        <NavLink to={"/contact"} className={styles.list} style={activeStyle}>
          Contact
        </NavLink>
      )}
      {authUser?.user ? (
        <NavLink
          to={"/my_learning"}
          className={styles.list}
          style={activeStyle}
        >
          My learning
        </NavLink>
      ) : (
        false
      )}
    </div>
  );
};
