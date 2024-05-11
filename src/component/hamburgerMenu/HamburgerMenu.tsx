import ColoredButton from "../shared/button/coloredButton/ColoredButton";
import WhiteButton from "../shared/button/whiteButton/WhiteButton";
import styles from "./HamurgerMenu.module.scss";
import { NavLink } from "react-router-dom";
import { useContexApi } from "../../utils/ContextApi";
import UserAvatar from "../userAvatar/UserAvatar";
import Cart from "../cart/Cart";
import { hamburgerType } from "../hamburgerButton/HamburgerType";

export const HamburgerMenu = ({ handleClick }: hamburgerType) => {
  const authUser = useContexApi();

  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "black" : ""
    };
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.linkBox}>
        <div
          style={{
            display: "flex",
            borderBottom: authUser.user ? "1px solid silver" : ""
          }}
        >
          {authUser.user ? (
            <NavLink
              to={"/user"}
              className={styles.list}
              style={{ gap: "12px" }}
              onClick={handleClick}
            >
              <UserAvatar />
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
              onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
          >
            Home
          </NavLink>
        )}
        <NavLink
          to={"/courses"}
          className={styles.list}
          style={activeStyle}
          onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
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
