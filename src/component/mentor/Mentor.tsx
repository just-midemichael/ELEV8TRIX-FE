import { CSSProperties } from "react";
import { H5 } from "../shared/Title/H5";
import MentorCard from "../card/mentorCard/MentorCard";
import mentor1 from "/mentorImage1.png";
import mentor2 from "/mentorImage2.png";
import mentor3 from "/mentorImage3.png";
import mentor4 from "/mentorImage4.png";

const Mentor = () => {
  const mentorData = [
    {
      thumbNail: `${mentor1}`,
      mentorName: "Lorem Ipsum",
      profession: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.",
      review: "44k"
    },
    {
      thumbNail: `${mentor2}`,
      mentorName: "Lorem Ipsum",
      profession: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.",
      review: "44k"
    },
    {
      thumbNail: `${mentor3}`,
      mentorName: "Lorem Ipsum",
      profession: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.",
      review: "44k"
    },
    {
      thumbNail: `${mentor4}`,
      mentorName: "Lorem Ipsum",
      profession: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc nam vestibulum sit leo. Mattis arcu dictum vitae parturient.",
      review: "44k"
    }
  ];
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
  maxWidth: "496px"
};
