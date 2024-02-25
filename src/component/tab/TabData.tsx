import CategoryOne from "./courseCategory/CategoryOne";
import CategoryTwo from "./courseCategory/CategoryTwo";
import styles from "../../style/Courses.module.scss";
import CourseDescription from "./courseDescription/CourseDescription";

export const courseData = [
  { label: "Category", content: <CategoryOne array={4} /> },
  { label: "Category", content: <CategoryTwo array={4} /> },
  { label: "Category", content: <CategoryOne array={4} /> },
  { label: "Category", content: <CategoryTwo array={4} /> },
  { label: "Category", content: <CategoryOne array={4} /> }
];

export const courseDataMain = [
  {
    label: "Category",
    content: <CategoryOne array={8} className={styles.courseLayout} />
  },
  {
    label: "Category",
    content: <CategoryTwo array={8} className={styles.courseLayout} />
  },
  {
    label: "Category",
    content: <CategoryOne array={8} className={styles.courseLayout} />
  },
  {
    label: "Category",
    content: <CategoryTwo array={8} className={styles.courseLayout} />
  },
  {
    label: "Category",
    content: <CategoryOne array={8} className={styles.courseLayout} />
  }
];

export const courseReviewData = [
  {
    label: "Course Info",
    content: <CourseDescription />
  },
  {
    label: "Reviews",
    content: <div>ii</div>
  }
];
