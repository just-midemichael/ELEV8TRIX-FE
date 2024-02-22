import { CSSProperties } from "react";
import MyLearningHero from "../component/hero/myLearningHero/MyLearningHero";
import Subscription from "../component/subscription/Subscription";
import styles from "../style/MyLearning.module.scss";
import MyCourse from "../component/myCourse/MyCourse";

// Set the page title
const pageTitle = () => (document.title = "My learning");
pageTitle();

const MyLearning = () => {
  return (
    <div>
      <section className={styles.heroSection} style={heroSection}>
        <MyLearningHero />
      </section>
      <section style={myCourseSection}>
        <MyCourse />
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

const myCourseSection: CSSProperties = {
  padding: "10px 7%",
  backgroundColor: "white"
};
