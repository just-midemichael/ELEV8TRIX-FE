import { CSSProperties } from "react";
import { H5 } from "../shared/Title/H5";
import MentorCard from "../card/mentorCard/MentorCard";
import { mentorData } from "../../data/MentorData";

const Mentor = () => {
  return (
    <div style={container}>
      <div style={titleBox}>
        <H5
          title={"Lorem ipsum dolor sit amet, consectetur Mentors"}
          style={title}
        />
      </div>
      <div style={contentBox}>
        {mentorData.map((mentor, index) => (
          <MentorCard
            key={index}
            thumbNail={mentor.thumbNail}
            mentorName={mentor.mentorName}
            profession={mentor.profession}
            description={mentor.description}
            review={mentor.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Mentor;

const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
  width: "100%"
};

const titleBox: CSSProperties = {
  fontWeight: "700",
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "left",
  padding: "4px 0",
  overflow: "hidden"
};

const contentBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "30px 0",
  overflowY: "hidden",
  gap: "20px"
};

const title: CSSProperties = {
  lineHeight: "40px",
  maxWidth: "800px"
};
