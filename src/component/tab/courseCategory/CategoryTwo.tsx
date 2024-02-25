import CourseCard from "../../card/courseCard/CourseCard";
import thumbnail2 from "/thumbnail2.png";
import avatar2 from "/avatar2.png";
import { CSSProperties } from "react";
import { useGlobalContex } from "../../../utils/ContextApi";
import { useLocation } from "react-router-dom";

type categoryProp = {
  array: number;
  className?: string;
};

const CategoryTwo = ({ array, className }: categoryProp) => {
  const courseLink = useGlobalContex();

  const location = useLocation();
  const redirectPath = location.state?.path || "/";

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
    <div className={className} style={container}>
      {new Array(array).fill(courses).map((course, index) => (
        <CourseCard
          key={index}
          thumbNail={course.thumbnail}
          avatar={course.avatar}
          authorName={course.authorName}
          profession={course.profession}
          title={course.title}
          description={course.description}
          review={course.review}
          linkTo={`/${courseLink.link}` || redirectPath}
          onClick={() =>
            courseLink.setLink(
              (window.location.href = `/courses/${course.title.split(" ").join("_")}`)
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
