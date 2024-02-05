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
      <Link to={""} target="_blank" className={styles.link}>
        <YouTubeIcon
          cursor="pointer"
          sx={{
            "&:hover": { color: "#FF0000" },
            width: "22px",
            height: "22px",
            backgroundColor: "rgba(128, 128, 128, 0.212);",
            borderRadius: "100%",
            padding: "3px"
          }}
        />
      </Link>
      {/*--------------Youtube---------------*/}
      <Link to={""} target="_blank" className={styles.link}>
        <TwitterIcon
          cursor="pointer"
          sx={{
            "&:hover": { color: "#1DA1F2" },
            width: "22px",
            height: "22px",
            backgroundColor: "rgba(128, 128, 128, 0.212);",
            borderRadius: "100%",
            padding: "3px"
          }}
        />
      </Link>
      {/*-----------Twitter-------------------*/}
      <Link to={""} target="_blank" className={styles.link}>
        <InstagramIcon
          cursor="pointer"
          sx={{
            "&:hover": { color: "#962fbf" },
            width: "22px",
            height: "22px",
            backgroundColor: "rgba(128, 128, 128, 0.212);",
            borderRadius: "100%",
            padding: "3px"
          }}
        />
      </Link>
      {/*--------------Instagram---------------*/}
      <Link to={""} target="_blank" className={styles.link}>
        <LinkedInIcon
          cursor="pointer"
          sx={{
            "&:hover": { color: "#0077B5" },
            width: "22px",
            height: "22px",
            backgroundColor: "rgba(128, 128, 128, 0.212);",
            borderRadius: "100%",
            padding: "3px"
          }}
        />
      </Link>
      {/*--------------LinkedIn---------------*/}
      <Link to={""} target="_blank" className={styles.link}>
        <FacebookIcon
          cursor="pointer"
          sx={{
            "&:hover": { color: "#0866FF" },
            width: "22px",
            height: "22px",
            backgroundColor: "rgba(128, 128, 128, 0.212);",
            borderRadius: "100%",
            padding: "3px"
          }}
        />
      </Link>
      {/*--------------Facebook---------------*/}
      <Link to={""} target="_blank" className={styles.link}>
        <WhatsAppIcon
          cursor="pointer"
          sx={{
            "&:hover": { color: "#25d366" },
            width: "22px",
            height: "22px",
            backgroundColor: "rgba(128, 128, 128, 0.212);",
            borderRadius: "100%",
            padding: "3px"
          }}
        />
      </Link>
      {/*--------------WhatsApp---------------*/}
    </div>
  );
};
