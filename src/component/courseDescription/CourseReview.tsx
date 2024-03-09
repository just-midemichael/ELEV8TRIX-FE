import { CSSProperties, useEffect, useState } from "react";
import { H8 } from "../shared/Title/H8";
import courses, { CourseProps as CourseType } from "../../data/CourseData";
import { useParams } from "react-router-dom";

const CourseReview = () => {
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
        <H8 title={"Reviews"} />
      </div>
      <div style={contentBox}>
        {course ? (
          <div key={course.id} style={reviewBox}>
            {course.review}
          </div>
        ) : (
          "No Reviews"
        )}
      </div>
    </div>
  );
};

export default CourseReview;

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

const contentBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  height: "fit-content"
};

const reviewBox: CSSProperties = {
  textAlign: "left",
  width: "100%",
  height: "fit-content",
  padding: "4px 0px"
};
