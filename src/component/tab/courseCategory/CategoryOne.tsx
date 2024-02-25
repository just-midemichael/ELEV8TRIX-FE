import CourseCard from "../../card/courseCard/CourseCard";
import thumbnail1 from "/thumbnail1.png";
import avatar1 from "/avatar1.png";
import { CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContex } from "../../../utils/ContextApi";

type categoryProp = {
  array: number;
  className?: string;
};

const CategoryOne = ({ array, className }: categoryProp) => {
  const courseLink = useGlobalContex();

  const location = useLocation();
  const redirectPath = location.state?.path || "/";

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
          linkTo={`${courseLink.link}` || redirectPath}
          onClick={() =>
            courseLink.setLink(
              `${(window.location.href = `/courses/${course.title.split(" ").join("_")}`)}`
            )
          }
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
