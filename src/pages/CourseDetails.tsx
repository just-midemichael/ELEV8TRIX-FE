import { CSSProperties, useEffect, useState } from "react";
import styles from "../style/CourseDetails.module.scss";
import Tab from "../component/tab/Tab";
import { courseReviewData } from "../data/TabData";
import { H8 } from "../component/shared/Title/H8";
import courses, { CourseProps } from "../data/CourseData";
import { useParams } from "react-router-dom";

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const selectedCourse = courses.find(
        (course) => course.id === parseInt(`${id}`)
      );
      setCourse(selectedCourse || null);
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.container} style={container}>
      <main style={mainSection}>
        <section className={styles.previewBox} style={previewBox}>
          <img
            src={`${course ? course : ""}`}
            style={{ width: "100%", height: "100%" }}
          />
        </section>
        <div>
          <Tab
            tabs={courseReviewData}
            tabTitle={course ? course.title : `${id}`}
            className={styles.tabTitleBox}
          />
        </div>
      </main>

      <section className={styles.sideBar} style={sideBar}>
        <div className={styles.priceBox} style={priceBox}>
          <H8 title={`Price:${course ? course.price : "$0"}`} />
        </div>
        <div className={styles.learningOutcomeBox} style={learningOutcomeBox}>
          <div style={outcomeTitle}>
            <H8 title={"what You will Learn"} />
          </div>
          <div className={styles.outcomeList} style={outcomeList}>
            {course ? <li>{course.youWillLearn}</li> : "Not Available"}
          </div>
        </div>
        <div className={styles.learningOutcomeBox} style={learningOutcomeBox}>
          <div style={outcomeTitle}>
            <H8 title={"Material Includes"} />
          </div>
          <div className={styles.outcomeList} style={outcomeList}>
            {course ? <li>{course.materialInclude}</li> : "Not Available"}
          </div>
        </div>
        <div className={styles.learningOutcomeBox} style={learningOutcomeBox}>
          <div style={outcomeTitle}>
            <H8 title={"Requirement"} />
          </div>
          <div className={styles.outcomeList} style={outcomeList}>
            {course ? <li>{course.courseRequirement}</li> : "Not Available"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;

const container: CSSProperties = {
  padding: "50px 7%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  gap: "20px"
};

const mainSection: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  height: "fit-content",
  minHeight: "400px"
};

const sideBar: CSSProperties = {
  width: "100%",
  maxWidth: "420px",
  height: "fit-content",
  minHeight: "400px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  borderRadius: "10px",
  border: "1px solid silver"
};

const previewBox: CSSProperties = {
  width: "100%",
  height: "440px",
  borderRadius: "16px",
  backgroundColor: "silver",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const priceBox: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  maxWidth: "500px",
  height: "fit-content",
  minHeight: "40px",
  padding: "20px 20px",
  fontWeight: "700",
  borderBottom: "1px solid silver"
};

const learningOutcomeBox: CSSProperties = {
  textAlign: "left",
  width: "100%",
  maxWidth: "500px",
  padding: "20px 20px",
  borderBottom: "1px solid silver"
};

const outcomeTitle: CSSProperties = {
  fontWeight: "700",
  width: "100%",
  height: "fit-content",
  minHeight: "40px",
  padding: "4px 0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
};

const outcomeList: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "100px",
  display: "grid",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  fontSize: "0.95rem"
};
