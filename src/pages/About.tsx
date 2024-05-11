import { CSSProperties } from "react";
import heroImage from "/heroImage.jpg";
import styles from "../style/About.module.scss";
import { H5 } from "../component/shared/Title/H5";
import Mentor from "../component/mentor/Mentor";

// Set the page title
const pageTitle = () => (document.title = "About Us");
pageTitle();

const About = () => {
  return (
    <div>
      <section className={styles.heroSection} style={heroSection}>
        <img src={`${heroImage}`} style={heroImageStyle} />
        <div style={textFocalBox}>
          <H5 title={"About Us"} />
          <div style={{ fontWeight: 500 }}>
            Like the name suggests, AltSchool Africa offers a more effective
            “alternative” to traditional academic institutions, in that it
            explores and offers practical & functional learning with the aid of
            modern technology.
            <br /> Like the name suggests, AltSchool Africa offers a more
            effective “alternative” to traditional academic institutions, in
            that it explores and offers practical & functional learning with the
            aid of modern technology. Like the name suggests, AltSchool Africa
            offers a more effective “alternative” to traditional academic
            institutions, in that it explores and offers practical & functional
            learning with the aid of modern technology.
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo} style={sectionTwo}>
        <div className={styles.title} style={title}>
          <H5 title={"Where we are headed"} />
        </div>
        <article className={styles.description} style={description}>
          Like the name suggests, AltSchool Africa offers a more effective
          “alternative” to traditional academic institutions, in that it
          explores and offers practical & functional learning with the aid of
          modern technology. <br />
          <br /> Like the name suggests, AltSchool Africa offers a more
          effective “alternative” to traditional academic institutions, in that
          it explores and offers practical & functional learning with the aid of
          modern technology.
          <br />
          <br /> Like the name suggests, AltSchool Africa offers a more
          effective “alternative” to traditional academic institutions, in that
          it explores and offers practical & functional learning with the aid of
          modern technology.
        </article>
      </section>
      <section style={{ padding: "50px 0" }}>
        <Mentor />
      </section>
    </div>
  );
};

export default About;

const heroSection: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "fit-contnent",
  minHeight: "300px",
  backgroundColor: "whitesmoke"
};

const heroImageStyle: CSSProperties = {
  width: "100%",
  maxWidth: "800px",
  height: "100%",
  maxHeight: "600px"
};

const textFocalBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 5%",
  fontWeight: 600,
  gap: "20px"
};

const sectionTwo: CSSProperties = {
  backgroundColor: "white",
  padding: "60px 7%",
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const title: CSSProperties = {
  width: "100%",
  maxWidth: "800px",
  height: "fit-content",
  minHeight: "20px",
  fontWeight: 600,
  padding: "10px 3%",
  textAlign: "center"
};

const description: CSSProperties = {
  width: "100%",
  maxWidth: "800px",
  height: "fit-content",
  minHeight: "200px",
  textAlign: "left",
  fontSize: "1rem",
  padding: "0 3%"
};
