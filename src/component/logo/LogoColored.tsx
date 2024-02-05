import styles from "./Logo.module.scss";
import logo from "/elev8trix-logo-colored.svg";

type logoProps = {
  link: string;
  style?: React.CSSProperties;
};

const LogoColored = ({ link, style }: logoProps) => {
  return (
    <div className={styles.logoContainer}>
      <a href={link} className={styles.logoLink}>
        <img
          className={styles.logo}
          alt="Elev8Trix Logo"
          src={logo}
          style={style}
        />
      </a>
    </div>
  );
};

export default LogoColored;
