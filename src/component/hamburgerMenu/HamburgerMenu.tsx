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
        {authUser.user ? (
          <NavLink
            to={"/user/my_profile"}
            className={styles.list}
            style={{ gap: "12px" }}
            onClick={() => (window.location.href = "/user/my_profile")}
          >
            <UserAvatar /> <div>User: {JSON.stringify(authUser.user)}</div>
          </NavLink>
        ) : (
          false
        )}
        {authUser?.user ? (
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
        {authUser?.user ? (
          false
        ) : (
          <ColoredButton
            text={"Sign up"}
            link={"/login"}
            target={""}
            className={styles.signupButton}
          />
        )}

        <WhiteButton
          text={authUser?.user ? "Log out" : "Log in"}
          link={authUser?.user ? "/" : "/login"}
          className={styles.loginButton}
        />
      </div>
    </div>
  );
};
