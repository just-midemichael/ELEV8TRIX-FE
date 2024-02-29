import { CSSProperties, useEffect, useState } from "react";
import { H8 } from "../shared/Title/H8";
import ColoredButton from "../shared/button/coloredButton/ColoredButton";
import courses, { CourseProps as CourseType } from "../../data/CourseData";
import { useParams } from "react-router-dom";

const CourseDescription = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const selectedCourse = courses.find(
        (course) => course.id === parseInt(`${id}`)
      );
      setCourse(selectedCourse || null);
    };

    fetchData();
  }, [id]);

  return (
    <div style={container}>
      <div style={titleBox}>
        <H8 title={"Course Description"} />
      </div>
      {course ? (
        <div key={course.id} style={descriptionBox}>
          {course.description}
        </div>
      ) : (
        "Not Availble"
      )}
      {course ? (
        <div style={buttonBox}>
          <ColoredButton text={"Start Course"} link={""} />
        </div>
      ) : (
        ""
      )}
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
  minHeight: "100px",
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
