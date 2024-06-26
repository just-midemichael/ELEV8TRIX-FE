import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { NavBar } from "../../component/navbar/NavBar";
import LogoColored from "../../component/logo/LogoColored";
import { HamburgerComp } from "../../component/hamburgerButton/Hamburger";
import { HamburgerMenu } from "../../component/hamburgerMenu/HamburgerMenu";
import ColoredButton from "../../component/shared/button/coloredButton/ColoredButton";
import WhiteButton from "../../component/shared/button/whiteButton/WhiteButton";
import Cart from "../../component/cart/Cart";
import UserAvatar from "../../component/userAvatar/UserAvatar";
import { NavLink } from "react-router-dom";
import { useContexApi } from "../../utils/ContextApi";

const Header = () => {
  const authUser = useContexApi();
  const [isOpen, setOpen] = useState(false);
  const [overflow, setOverflow] = useState("");
  const [display, SetDisplay] = useState("hideMenu");
  const [isValue, setIsValue] = useState(false);

  //This arrow function handle the hamburger onclick event
  const handleMenuDisplay = () => {
    const rootBody = document.getElementById("root-body") as HTMLElement;
    setOpen(!isOpen);
    setIsValue(!isValue);

    if (overflow == "") {
      rootBody.style.overflowY = "hidden";
      setOverflow("hidden");
      SetDisplay("showMenu");
    } else {
      rootBody.style.overflowY = "";
      setOverflow("");
      SetDisplay("hideMenu");
    }
  };

  //Close Menu on Screen Resize
  const closeMenu = () => {
    setOpen(false);
  };

  //Untoggle Hamburger on Screen Resize
  const unToggle = () => {
    setIsValue(false);
  };

  useEffect(() => {
    //Function that handle screen resize event
    const handleResize = () => {
      if (window.innerWidth > 1000 && isOpen) {
        closeMenu();
        unToggle();
        handleMenuDisplay();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoBox}>
          <LogoColored link="/" />
        </div>
        <div className={styles.navbarBox}>
          <NavBar />
        </div>
        <div className={styles.signinBox}>
          {authUser?.user ? (
            false
          ) : (
            <WhiteButton
              text={"Log In"}
              link={"/login"}
              className={styles.loginButton}
            />
          )}
          {authUser?.user ? (
            false
          ) : (
            <ColoredButton
              text={"Sign Up"}
              link={"/login"}
              className={styles.signupButton}
            />
          )}
          {authUser?.user ? (
            <NavLink to={"/cart"} style={{ color: "#3149a1" }}>
              <Cart />
            </NavLink>
          ) : (
            false
          )}

          {authUser?.user ? (
            <NavLink to={`/user/${authUser.user}`}>
              <UserAvatar />
            </NavLink>
          ) : (
            false
          )}
        </div>
        <div className={styles.hamburgerBox}>
          <HamburgerComp handleClick={handleMenuDisplay} value={isValue} />
        </div>
      </div>
      <div className={styles.hamburgerMenuBox} id={styles[`${display}`]}>
        <HamburgerMenu handleClick={handleMenuDisplay} />
      </div>
    </>
  );
};

export default Header;
