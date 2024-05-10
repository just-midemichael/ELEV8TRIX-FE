import styles from "./LearningCard.module.scss";
import ColoredButton from "../../shared/button/coloredButton/ColoredButton";
import { MouseEventHandler } from "react";

type cardProps = {
  thumbNail: string;
  avatar: string;
  authorName: string;
  profession: string;
  title: string;
  totalLesson: number;
  completeLesson: number;
  buttonText: string;
  buttonLink: string;
  onClick?: MouseEventHandler;
};

const LearningCard = ({
  thumbNail,
  avatar,
  authorName,
  profession,
  title,
  totalLesson,
  completeLesson,
  buttonText,
  buttonLink,
  onClick
}: cardProps) => {
  const x = (completeLesson / totalLesson) * 100;
  const status = x - 100;

  return (
    <div
      className={styles.cardContainer}
      style={{
        height: "283px",
        width: "255px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid silver"
      }}
    >
      <div
        style={{
          height: "45%",
          width: "100%",
          backgroundColor: "silver"
        }}
      >
        <img src={thumbNail} style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        className={styles.textFocalContainer}
        style={{ height: "55%", width: "100%", backgroundColor: "white" }}
      >
        <div className={styles.authorBox}>
          <div className={styles.authorAvatar}>
            <img src={avatar} style={{ width: "100%", height: "100%" }} />
          </div>
          <div className={styles.authorName}>
            <p className={styles.name}>{authorName}</p>
            <p className={styles.profession}>{profession}</p>
          </div>
        </div>
        <div className={styles.progressBox}>
          <p className={styles.title}>{title}</p>
          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <div
                className={styles.status}
                style={{ transform: `translateX(${status}%)` }}
              ></div>
            </div>
            <div className={styles.lessonBox}>
              <p className={styles.lesson}>
                Lesson {completeLesson ? completeLesson : 0} of{" "}
                {totalLesson ? totalLesson : 0}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <ColoredButton
            className={styles.button}
            text={`${buttonText}`}
            link={`${buttonLink}`}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
