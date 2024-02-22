import styles from "./MentorCard.module.scss";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

type cardProps = {
  thumbNail: string;
  mentorName: string;
  profession: string;
  description: string;
  review: string;
};

const MentorCard = ({
  thumbNail,
  mentorName,
  profession,
  description,
  review
}: cardProps) => {
  return (
    <div
      style={{
        height: "283px",
        width: "255px",
        borderRadius: "20px",
        overflow: "hidden"
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
        <div className={styles.mentorBox}>
          <div className={styles.mentorName}>
            <p className={styles.name}>{mentorName}</p>
            <p className={styles.profession}>{profession}</p>
          </div>
        </div>
        <div className={styles.descriptionBox}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.reviewBox}>
          <div className={styles.star}>
            <StarIcon
              style={{ color: "#119EE3", width: "14px", height: "14px" }}
            />
            <StarIcon
              style={{ color: "#119EE3", width: "14px", height: "14px" }}
            />
            <StarIcon
              style={{ color: "#119EE3", width: "14px", height: "14px" }}
            />
            <StarIcon
              style={{ color: "#119EE3", width: "14px", height: "14px" }}
            />
            <StarBorderOutlinedIcon
              style={{ color: "#119EE3", width: "14px", height: "14px" }}
            />
          </div>
          <div className={styles.value}>
            ( {review} {review ? "Reviews" : "No Review"})
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
