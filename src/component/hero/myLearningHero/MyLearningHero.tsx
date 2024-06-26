import { H5 } from "../../shared/Title/H5";
import styles from "./MyLearningHero.module.scss";
import polygon from "/smallPolygon.png";
import {
  bannerContainer,
  textFocalContainer,
  textFocalWraper,
  titleBox
} from ".";
import { useContexApi } from "../../../utils/ContextApi";

const MyLearningHero = () => {
  // Greet User with Date Object
  const greetTime = new Date().getHours();
  const greetUser =
    greetTime >= 12 && greetTime < 18
      ? "Good Afternoon"
      : greetTime >= 18 && greetTime < 24
        ? "Good Evening"
        : "Good Morning";
  const authUser = useContexApi();

  return (
    <div className={styles.bannerContainer} style={bannerContainer}>
      <div className={styles.textFocalContainer} style={textFocalContainer}>
        <div className={styles.textFocalWraper} style={textFocalWraper}>
          <div style={titleBox}>
            <H5 title={`${greetUser}, ${authUser.user}`} />
            <div>Time: {greetTime} O'clock</div>
          </div>
        </div>
      </div>
      <img src={polygon} className={styles.polygon} alt="elev8trix polygon" />
      <img src={polygon} className={styles.polygon} alt="elev8trix polygon" />
    </div>
  );
};

export default MyLearningHero;
