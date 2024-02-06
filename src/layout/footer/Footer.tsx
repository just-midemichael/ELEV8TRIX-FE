import Logo from "../../component/logo/Logo";
import { SocialMedia } from "../../component/socialMedia/SocialMedia";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.assetContainer}>
            <div className={styles.logoContainer}>
              <Logo link="/" />
            </div>
            <div className={styles.descriptionContainer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae perspiciatis voluptate consectetur nam qui in incidunt
              quos tenetur,
            </div>
            <div className={styles.socialContainer}>
              <SocialMedia />
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <div className={styles.linksContainer}>
              <p className={styles.linkTitle}>Useful Links</p>
              <a className={styles.link} href="#">
                <li className={styles.list}>Useful link 1</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Useful link 2</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Useful link 3</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Useful link 4</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Useful link 5</li>
              </a>
            </div>
            <div className={styles.supportContainer}>
              <p className={styles.linkTitle}>Support</p>
              <a className={styles.link} href="#">
                <li className={styles.list}>Support 1</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Support 2</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Support 3</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Support 4</li>
              </a>
              <a className={styles.link} href="#">
                <li className={styles.list}>Support 5</li>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <div className={styles.copyrightBox}>
            Powered by elev8trix, &copy; 2024. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
