import { useState } from "react";
import ColoredButton from "../shared/button/coloredButton/ColoredButton";
import WhiteButton from "../shared/button/whiteButton/WhiteButton";
import styles from "./HamurgerMenu.module.scss";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = () => {
  const [user] = useState(false);
  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "black" : ""
    };
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.linkBox}>
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
      <div className={styles.signinBox}>
        {user ? (
          false
        ) : (
          <ColoredButton
            text={"Sign up"}
            link={"/login"}
            target={""}
            className={styles.signupButton}
          />
        )}

        {/* {user ? (
          <NavLink
            to={"/user/my_profile"}
            className={styles.list}
            style={{ width: "60px" }}
            onClick={() => (window.location.href = "/user/my_profile")}
          >
            <UserAvatar />
          </NavLink>
        ) : (
          false
        )}
        {user ? (
          <NavLink
            to={"/cart"}
            className={styles.list}
            style={{ width: "60px" }}
            onClick={() => (window.location.href = "/cart")}
          >
            <Cart />
          </NavLink>
        ) : (
          false
        )} */}
        <WhiteButton
          text={user ? "Log out" : "Log in"}
          link={"/login"}
          className={styles.loginButton}
        />
      </div>
    </div>
  );
};
