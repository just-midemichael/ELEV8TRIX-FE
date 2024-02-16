import { CSSProperties } from "react";
import MyLearningHero from "../component/hero/myLearningHero/MyLearningHero";
import Subscription from "../component/subscription/Subscription";

// Set the page title
const pageTitle = () => (document.title = "My learning");
pageTitle();

const MyLearning = () => {
  return (
    <div>
      <section style={heroSection}>
        <MyLearningHero />
      </section>
      <section>
        <Subscription />
      </section>
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
