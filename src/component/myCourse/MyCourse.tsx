import { CSSProperties, useState } from "react";
import thumbnail from "/thumbnail1.png";
import avatar1 from "/avatar1.png";
import LearningCard from "../card/learningCard/LearningCard";
import { H5 } from "../shared/Title/H5";

const MyCourse = () => {
  const [link, setLink] = useState<string>();
  const courses = {
    thumbnail: `${thumbnail}`,
    avatar: `${avatar1}`,
    authorName: "Lorem Ipsum",
    profession: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet",
    totalLesson: 5,
    completeLesson: 2,
    buttonText: "Continue",
    buttonLink: `/courses/${link}`
  };

  return (
    <>
      <div style={titleBox}>
        <H5 title={"My learning"} style={{ fontWeight: "900" }} />
      </div>
      <div style={contentBox}>
        {new Array(4).fill(courses).map((course, index) => (
          <LearningCard
            key={index}
            thumbNail={course.thumbnail}
            avatar={course.avatar}
            authorName={course.authorName}
            profession={course.profession}
            title={course.title}
            totalLesson={course.totalLesson}
            completeLesson={course.completeLesson}
            buttonText={course.buttonText}
            buttonLink={course.buttonLink}
            onClick={() => setLink(course.title.split(" ").join("_"))}
          />
        ))}
      </div>
    </>
  );
};

export default MyCourse;

const titleBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 0"
};

const contentBox: CSSProperties = {
  width: "100%",
  flexWrap: "wrap",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px 0",
  gap: "20px"
};
