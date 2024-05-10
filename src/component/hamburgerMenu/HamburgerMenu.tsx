import ColoredButton from "../shared/button/coloredButton/ColoredButton";
import WhiteButton from "../shared/button/whiteButton/WhiteButton";
import styles from "./HamurgerMenu.module.scss";
import { NavLink } from "react-router-dom";
import { useGlobalContex } from "../../utils/ContextApi";
import UserAvatar from "../userAvatar/UserAvatar";
import Cart from "../cart/Cart";

export const HamburgerMenu = () => {
  const authUser = useGlobalContex();

  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "black" : ""
    };
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.linkBox}>
        <div className={styles.userDetailBox}>
          {authUser.user ? (
            <NavLink
              to={"/user/my_profile"}
              className={styles.list}
              style={{ gap: "12px" }}
              onClick={() => (window.location.href = "/user/my_profile")}
            >
              <UserAvatar />{" "}
              <div style={{ color: "black" }}>{authUser.user}</div>
            </NavLink>
          ) : (
            false
          )}
          {authUser?.user ? (
            <NavLink
              to={"/cart"}
              className={styles.list}
              style={{
                width: "60px",
                display: "flex",
                justifyContent: "center"
              }}
              onClick={() => (window.location.href = "/cart")}
            >
              <Cart />
            </NavLink>
          ) : (
            false
          )}
        </div>

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
      </div>
      <div className={styles.signinBox}>
        <WhiteButton
          text={authUser?.user ? "Log out" : "Log in"}
          link={authUser?.user ? "/" : "/login"}
          wrapperWidth={"100%"}
          className={styles.loginButton}
        />
        {authUser?.user ? (
          false
        ) : (
          <ColoredButton
            text={"Sign up"}
            link={"/login"}
            target={""}
            wrapperWidth={"100%"}
            className={styles.signupButton}
          />
        )}
      </div>
    </div>
  );
};
