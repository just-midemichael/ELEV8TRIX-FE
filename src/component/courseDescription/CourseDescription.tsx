import { CSSProperties } from "react";
import { H8 } from "../shared/Title/H8";
import ColoredButton from "../shared/button/coloredButton/ColoredButton";
import { courses } from "../../data/CourseData";

const CourseDescription = () => {
  return (
    <div style={container}>
      <div style={titleBox}>
        <H8 title={"Course Description"} />
      </div>
      {courses.map((course, id) => (
        <div key={id} style={descriptionBox}>
          {course.description}
        </div>
      ))}
      <div style={buttonBox}>
        <ColoredButton text={"Start Course"} link={""} />
      </div>
    </div>
  );
};

export default CourseDescription;

const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  minHeight: "300px",
  maxWidth: "780px",
  gap: "4px"
};

const titleBox: CSSProperties = {
  fontWeight: "600",
  width: "100%",
  height: "fit-content",
  minHeight: "40px",
  textAlign: "left",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "4px 0px"
};

const descriptionBox: CSSProperties = {
  textAlign: "left",
  width: "100%",
  height: "fit-content",
  padding: "4px 0px"
};

const buttonBox: CSSProperties = {
  padding: "10px 0px"
};
