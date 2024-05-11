import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";
import logo from "/elev8trix-logo-white.svg";

type logoProps = {
  link: string;
  style?: React.CSSProperties;
};

const Logo = ({ link, style }: logoProps) => {
  return (
    <div className={styles.logoContainer}>
      <NavLink to={link} className={styles.logoLink}>
        <img
          className={styles.logo}
          alt="Elev8Trix Logo"
          src={logo}
          style={style}
        />
      </NavLink>
    </div>
  );
};

export default Logo;
