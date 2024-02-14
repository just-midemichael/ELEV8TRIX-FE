import { CSSProperties } from "react";
import MyLearningHero from "../component/hero/myLearningHero/MyLearningHero";

// Set the page title
const pageTitle = () => (document.title = "My learning");
pageTitle();

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
