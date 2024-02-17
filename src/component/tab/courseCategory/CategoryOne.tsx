import CourseCard from "../../card/courseCard/CourseCard";
import thumbnail1 from "/thumbnail1.png";
import avatar1 from "/avatar1.png";
import { CSSProperties } from "react";

const CategoryOne = () => {
  const courses = {
    thumbnail: `${thumbnail1}`,
    avatar: `${avatar1}`,
    authorName: "Lorem Ipsum",
    profession: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.",
    review: "44k"
  };

  return (
    <div style={container}>
      {new Array(4).fill(courses).map((course, index) => (
        <CourseCard
          key={index}
          thumbNail={course.thumbnail}
          avatar={course.avatar}
          authorName={course.authorName}
          profession={course.profession}
          title={course.title}
          description={course.description}
          review={course.review}
        />
      ))}
    </div>
  );
};

export default CategoryOne;

const container: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px"
};
