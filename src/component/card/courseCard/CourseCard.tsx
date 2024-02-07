import { Link } from "react-router-dom";
import styles from "./CourseCard.module.scss";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

type cardProps = {
  thumbNail: string;
  avatar: string;
  authorName: string;
  profession: string;
  title: string;
  description: string;
  review: string;
};

const CourseCard = ({
  thumbNail,
  avatar,
  authorName,
  profession,
  title,
  description,
  review
}: cardProps) => {
  return (
    <Link
      to={"/course"}
      onClick={() => (window.location.href = "/course")}
      style={{ color: "grey", textDecoration: "none" }}
    >
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
            backgroundColor: "grey"
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
          <div className={styles.descriptionBox}>
            <p className={styles.title}>{title}</p>
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
    </Link>
  );
};

export default CourseCard;
