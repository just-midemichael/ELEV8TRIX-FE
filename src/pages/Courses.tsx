import { CSSProperties } from "react";
import CourseHero from "../component/hero/courseHero/CourseHero";
import Subscription from "../component/subscription/Subscription";
import styles from "../style/Courses.module.scss";
import Tab from "../component/tab/Tab";
import { courseDataMain } from "../data/TabData";

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
        <Tab
          tabs={courseDataMain}
          tabTitle={"Elev8te your carrer with one of these courses"}
        />
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
