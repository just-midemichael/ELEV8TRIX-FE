import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.assetContainer}>
            <div className={styles.logoContainer}>Logo</div>
            <div className={styles.descriptionContainer}>Description</div>
            <div className={styles.socialContainer}>Social Media</div>
          </div>
          <div className={styles.linkWrapper}>
            <div className={styles.linksContainer}>Useful Links</div>
            <div className={styles.supportContainer}>Support Links</div>
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <div className={styles.copyrightBox}>Copyright box</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
