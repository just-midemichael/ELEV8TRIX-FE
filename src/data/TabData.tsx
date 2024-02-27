import CategoryOne from "../component/courseCategory/CategoryOne";
import CategoryTwo from "../component/courseCategory/CategoryTwo";
import styles from "../style/Courses.module.scss";
import CourseDescription from "../component/courseDescription/CourseDescription";

export const courseData = [
  {
    label: "Category",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={4} />
  },
  {
    label: "Category",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={4} />
  },
  {
    label: "Category",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={4} />
  },
  {
    label: "Category",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={4} />
  },
  {
    label: "Category",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={4} />
  }
];

export const courseDataMain = [
  {
    label: "Category",
    content: (
      <CategoryOne
        sliceNumOne={0}
        sliceNumTwo={8}
        className={styles.courseLayout}
      />
    )
  },
  {
    label: "Category",
    content: (
      <CategoryTwo
        sliceNumOne={0}
        sliceNumTwo={8}
        className={styles.courseLayout}
      />
    )
  },
  {
    label: "Category",
    content: (
      <CategoryOne
        sliceNumOne={0}
        sliceNumTwo={8}
        className={styles.courseLayout}
      />
    )
  },
  {
    label: "Category",
    content: (
      <CategoryTwo
        sliceNumOne={0}
        sliceNumTwo={8}
        className={styles.courseLayout}
      />
    )
  },
  {
    label: "Category",
    content: (
      <CategoryOne
        sliceNumOne={0}
        sliceNumTwo={8}
        className={styles.courseLayout}
      />
    )
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
