import { CSSProperties } from "react";
import CourseHero from "../component/hero/courseHero/CourseHero";
import Subscription from "../component/subscription/Subscription";
import styles from "../style/Courses.module.scss";
import Tab from "../component/tab/Tab";
import { courseDataMain } from "../component/tab/TabData";

// Set the page title
const pageTitle = () => (document.title = "Courses");
pageTitle();

const Courses = () => {
  return (
    <div>
      <section className={styles.heroSection} style={heroSection}>
        <CourseHero />
      </section>
      <section style={courseSection}>
        <Tab tabs={courseDataMain} />
      </section>
      <section>
        <Subscription />
      </section>
    </div>
  );
};

export default Courses;

const heroSection: CSSProperties = {
  padding: "50px 7%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const courseSection: CSSProperties = {
  padding: "10px 7%"
};
