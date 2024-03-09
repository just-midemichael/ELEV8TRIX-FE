import CategoryOne from "../component/courseCategory/CategoryOne";
import CategoryTwo from "../component/courseCategory/CategoryTwo";
import CourseDescription from "../component/courseDescription/CourseDescription";
import CourseReview from "../component/courseDescription/CourseReview";

export const courseData = [
  {
    label: "Dev Ops",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={4} />
  },
  {
    label: "Software Engineering",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={6} />
  },
  {
    label: "Cyber Security",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={4} />
  },
  {
    label: "Data Science",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={5} />
  }
];

export const categoryAllData = [
  {
    label: "Most Popular",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={8} />
  },
  {
    label: "New",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={8} />
  }
];

export const categoryDevOpsData = [
  {
    label: "New",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={8} />
  }
];

export const categoryCyberSecurityData = [
  {
    label: "New",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={8} />
  }
];

export const categoryDataScienceData = [
  {
    label: "New",
    content: <CategoryTwo sliceNumOne={0} sliceNumTwo={8} />
  }
];

export const categorySoftwareEngineeringData = [
  {
    label: "New",
    content: <CategoryOne sliceNumOne={0} sliceNumTwo={8} />
  }
];

export const courseReviewData = [
  {
    label: "Course Info",
    content: <CourseDescription />
  },
  {
    label: "Reviews",
    content: <CourseReview />
  }
];
