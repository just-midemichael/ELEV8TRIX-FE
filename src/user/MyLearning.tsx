import { CSSProperties } from "react";
import MyLearningHero from "../component/hero/myLearningHero/MyLearningHero";

const MyLearning = () => {
  return (
    <div style={heroSection}>
      <MyLearningHero />
    </div>
  );
};

export default MyLearning;

const heroSection: CSSProperties = {
  padding: "50px 5%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
