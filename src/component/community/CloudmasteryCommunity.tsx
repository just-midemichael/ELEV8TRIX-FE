import { CSSProperties } from "react";
import { H5 } from "../shared/Title/H5";
import { H8 } from "../shared/Title/H8";
import image1 from "/communityImage1.svg";
import image2 from "/communityImage2.svg";
import ellipse from "/communityEllipse.png";
import purple from "/purpleEllipse.svg";
import polygon from "/communityPolygon.png";
import styles from "./CloudmasteryCommunity.module.scss";

const CloudmasteryCommunity = () => {
  return (
    <div className={styles.container} style={container}>
      <div style={textContainer}>
        <div style={titleBox}>
          <H5 title={"Join the Cloud Mastery Community"} style={title} />
        </div>
        <div style={descriptionBox}>
          <H8
            title={
              "Becoming a cloud master is not just about courses; it's about joining a community of like-minded individuals. Engage in discussions, share insights, and collaborate on projects through our exclusive community platform"
            }
            style={description}
          />
        </div>
      </div>
      <div className={styles.imageContainer} style={imageContainer}>
        <img src={image1} alt="cloude mastery" style={imageOne} />
        <img src={image2} alt="cloude mastery" style={imageTwo} />
        <img src={ellipse} alt="cloude mastery" style={ellipseShape} />
        <img src={purple} alt="cloude mastery" style={purpleEllipse} />
        <img src={polygon} alt="cloude mastery" style={polygonShape} />
      </div>
    </div>
  );
};

export default CloudmasteryCommunity;

const container: CSSProperties = {
  height: "fit-content",
  minHeight: "400px",
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const textContainer: CSSProperties = {
  width: "100%",
  maxWidth: "640px",
  height: "fit-content",
  minHeight: "320px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center"
};

const imageContainer: CSSProperties = {
  width: "100%",
  maxWidth: "640px",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
};

const titleBox: CSSProperties = {
  fontWeight: "900",
  height: "fit-content",
  minHeight: "50px",
  width: "100%",
  textAlign: "left",
  overflow: "hidden",
  padding: "8px 0",
  color: "#3149A1"
};

const descriptionBox: CSSProperties = {
  fontSize: "1rem",
  height: "fit-content",
  minHeight: "200px",
  width: "100%",
  textAlign: "left",
  fontWeight: "100",
  overflow: "hidden",
  padding: "8px 0"
};

const title: CSSProperties = {
  maxWidth: "496px",
  lineHeight: "40px"
};

const description: CSSProperties = {
  maxWidth: "525px"
};

const imageOne: CSSProperties = {
  zIndex: 10
};

const imageTwo: CSSProperties = {
  position: "absolute",
  zIndex: 11,
  bottom: "9%",
  right: "11%"
};
const purpleEllipse: CSSProperties = {
  position: "absolute"
};

const ellipseShape: CSSProperties = {
  position: "absolute",
  top: "-2%",
  right: "8%"
};

const polygonShape: CSSProperties = {
  position: "absolute",
  zIndex: 11,
  bottom: "12.5%",
  left: "12.5%"
};
