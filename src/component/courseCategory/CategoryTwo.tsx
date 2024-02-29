import CourseCard from "../card/courseCard/CourseCard";
import { CSSProperties, useState } from "react";
import courses from "../../data/CourseData";

type categoryProp = {
  sliceNumOne?: number;
  sliceNumTwo?: number;
  className?: string;
};

const CategoryTwo = ({ sliceNumOne, sliceNumTwo, className }: categoryProp) => {
  const [link, setLink] = useState("");

  return (
    <div className={className} style={container}>
      {courses.slice(sliceNumOne, sliceNumTwo).map((course, index) => (
        <CourseCard
          key={index}
          thumbNail={course.thumbnail}
          avatar={course.avatar}
          authorName={course.authourName}
          profession={course.profession}
          title={course.title}
          description={course.description}
          review={course.review}
          linkTo={`${link}`}
          onClick={() =>
            setLink(
              `${(window.location.href = `/courses/${course.title.split(" ").join("_")}`)}`
            )
          }
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
