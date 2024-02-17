import CourseCard from "../../card/courseCard/CourseCard";
import thumbnail2 from "/thumbnail2.png";
import avatar2 from "/avatar2.png";
import { CSSProperties } from "react";

const CategoryTwo = () => {
  const courses = {
    thumbnail: `${thumbnail2}`,
    avatar: `${avatar2}`,
    authorName: "Lorem Ipsum",
    profession: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.",
    review: "20k"
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

export default CategoryTwo;

const container: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px"
};
