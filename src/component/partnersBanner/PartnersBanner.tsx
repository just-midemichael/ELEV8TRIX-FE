import { CSSProperties } from "react";
import partnersIcon from "/partnersBanner.svg";
import styles from "./PartnersBanner.module.scss";
import Marquee from "react-fast-marquee";

const PartnersBanner = () => {
  return (
    <div style={bannerContainer}>
      <div style={title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        style={marquee}
        speed={60}
        delay={5}
      >
        <img
          src={partnersIcon}
          className={styles.bannerIcon}
          style={bannerIcon}
        />
      </Marquee>
    </div>
  );
};

export default PartnersBanner;

const bannerContainer: CSSProperties = {
  height: "fit-content",
  minHeight: "140px",
  width: "100%",
  backgroundColor: "white",
  color: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2px",
  overflow: "hidden"
};

const title: CSSProperties = {
  fontSize: "1rem",
  color: "inherit",
  height: "fit-content",
  minHeight: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
};

const marquee: CSSProperties = {
  overflow: "hidden",
  maxWidth: "500px"
};

const bannerIcon: CSSProperties = {
  height: "60px"
};
