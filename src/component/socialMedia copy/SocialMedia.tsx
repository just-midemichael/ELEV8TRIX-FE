import styles from "./SocialMedia.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <Link
        to={"http://www.twitter.com/zenithbank"}
        target="_blank"
        className={styles.link}
      >
        <TwitterIcon
          cursor="pointer"
          sx={{ "&:hover": { color: "#1DA1F2" } }}
        />
      </Link>
      {/*-----------Twitter-------------------*/}
      <Link
        to={"https://www.facebook.com/Zenithbank"}
        target="_blank"
        className={styles.link}
      >
        <FacebookIcon
          cursor="pointer"
          sx={{ "&:hover": { color: "#0866FF" } }}
        />
      </Link>
      {/*--------------Facebook---------------*/}
      <Link
        to={"https://www.youtube.com/user/ZenithDirect/videos"}
        target="_blank"
        className={styles.link}
      >
        <YouTubeIcon
          cursor="pointer"
          sx={{ "&:hover": { color: "#FF0000" } }}
        />
      </Link>
      {/*--------------Youtube---------------*/}
      <Link
        to={"https://www.linkedin.com/company/zenith-bank-group"}
        target="_blank"
        className={styles.link}
      >
        <LinkedInIcon
          cursor="pointer"
          sx={{ "&:hover": { color: "#0077B5" } }}
        />
      </Link>
      {/*--------------LinkedIn---------------*/}
      <Link
        to={"https://wa.me/2347040004422?text=Hi"}
        target="_blank"
        className={styles.link}
      >
        <WhatsAppIcon
          cursor="pointer"
          sx={{ "&:hover": { color: "#25d366" } }}
        />
      </Link>
      {/*--------------WhatsApp---------------*/}
      <Link
        to={"https://www.instagram.com/zenithbankplc/"}
        target="_blank"
        className={styles.link}
      >
        <InstagramIcon
          cursor="pointer"
          sx={{ "&:hover": { color: "#962fbf" } }}
        />
      </Link>
      {/*--------------Instagram---------------*/}
    </div>
  );
};
