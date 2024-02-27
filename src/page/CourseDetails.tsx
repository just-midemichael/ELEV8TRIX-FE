import { CSSProperties } from "react";
import styles from "../style/CourseReview.module.scss";
import Tab from "../component/tab/Tab";
import { courseReviewData } from "../data/TabData";
import { H8 } from "../component/shared/Title/H8";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <div className={styles.container} style={container}>
      <main style={mainSection}>
        <section style={previewVideo}>
          <img src={id} style={{ width: "100%", height: "100%" }} />
        </section>
        <div>
          <Tab
            tabs={courseReviewData}
            tabTitle={"Elev8te your carrer with one of these courses"}
            className={styles.tabTitleBox}
          />
        </div>
      </main>
      <section className={styles.sideBar} style={sideBar}>
        <div className={styles.priceBox} style={priceBox}>
          <H8 title={`Price:${"$0"}`} />
        </div>
        <div className={styles.learningOutcomeBox} style={learningOutcomeBox}>
          <div style={outcomeTitle}>
            <H8 title={"what You will Learn"} />
          </div>
          <div className={styles.outcomeList} style={outcomeList}>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Maiores quibusdam impedit saepe amet ipsa sapiente maxime</li>
            <li>dolorum aliquid alias delectus sed doloremque voluptate .</li>
            <li>expedita, porro reiciendis hic illo cum volup tatum ?</li>
          </div>
        </div>
        <div className={styles.learningOutcomeBox} style={learningOutcomeBox}>
          <div style={outcomeTitle}>
            <H8 title={"Material Includes"} />
          </div>
          <div className={styles.outcomeList} style={outcomeList}>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Maiores quibusdam impedit saepe amet ipsa sapiente maxime</li>
            <li>dolorum aliquid alias delectus sed doloremque voluptate .</li>
            <li>expedita, porro reiciendis hic illo cum volup tatum ?</li>
          </div>
        </div>
        <div className={styles.learningOutcomeBox} style={learningOutcomeBox}>
          <div style={outcomeTitle}>
            <H8 title={"Requirement"} />
          </div>
          <div className={styles.outcomeList} style={outcomeList}>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Maiores quibusdam impedit saepe amet ipsa sapiente maxime</li>
            <li>dolorum aliquid alias delectus sed doloremque voluptate .</li>
            <li>expedita, porro reiciendis hic illo cum volup tatum ?</li>
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
  height: "100%"
};

const mainSection: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  height: "fit-content",
  minHeight: "400px",
  padding: "20px 0"
};

const sideBar: CSSProperties = {
  width: "100%",
  maxWidth: "400px",
  height: "fit-content",
  minHeight: "400px",
  padding: "10px 20px",
  paddingBottom: "30px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "20px",
  backgroundColor: "white"
};

const previewVideo: CSSProperties = {
  width: "100%",
  maxWidth: "700px",
  height: "390px",
  borderRadius: "16px",
  backgroundColor: "silver",
  overflow: "hidden"
};

const priceBox: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  maxWidth: "500px",
  height: "fit-content",
  minHeight: "40px",
  padding: "10px 0",
  fontWeight: "700"
};

const learningOutcomeBox: CSSProperties = {
  border: "2px",
  textAlign: "left",
  width: "100%",
  maxWidth: "500px"
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
