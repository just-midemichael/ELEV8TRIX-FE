import { CSSProperties } from "react";
import { H6 } from "../shared/Title/H6";
import GlobalCard from "../card/globalCard/GlobalCard";
import illustration1 from "/coreValue1.svg";
import illustration2 from "/coreValue2.svg";
import illustration3 from "/coreValue3.svg";
import styles from "./CoreValue.module.scss";

const CoreValue = () => {
  const corevaluData = [
    {
      image: `${illustration1}`,
      title: "Web Courses",
      description:
        "Gain access to self paced learning through our website courses.",
      buttonText: "Get Started",
      buttonLink: ""
    },
    {
      image: `${illustration2}`,
      title: "Professional Consultancy",
      description:
        "Get professional advice and efficient solutions from our team of consultants",
      buttonText: "Get Started",
      buttonLink: ""
    },
    {
      image: `${illustration3}`,
      title: "Live Classes",
      description:
        "Join one of our live trainings sessions to get immerse yourself in interactiveand real-time learning",
      buttonText: "Get Started",
      buttonLink: ""
    }
  ];
  return (
    <div style={coreValueWrapper}>
      <div style={titleBox}>
        <H6 title={"How do we do this ? ( you may ask )"} />
      </div>
      <div style={contentBox} className={styles.contentBox}>
        {corevaluData.map((value, index) => (
          <GlobalCard
            key={index}
            image={value.image}
            title={value.title}
            description={value.description}
            buttonText={value.buttonText}
            buttonLink={value.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValue;

const coreValueWrapper: CSSProperties = {
  width: "100%",
  height: "fit-content"
};

const titleBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  fontWeight: "700",
  overflow: "hidden"
};

const contentBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 0",
  gap: "20px",
  overflow: "hidden"
};
