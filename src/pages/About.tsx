import { CSSProperties } from "react";
import heroImage from "/heroImage.jpg";
import styles from "../style/About.module.scss";
import { H5 } from "../component/shared/Title/H5";
import { H4 } from "../component/shared/Title/H4";

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
        </div>
      </section>
      <section className={styles.sectionTwo} style={sectionTwo}>
        <div style={title}>
          <H4 title={"Where we are headed"} />
        </div>
        <article style={description}>
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
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "50px 10px",
  fontWeight: 600
};

const sectionTwo: CSSProperties = {
  backgroundColor: "white",
  padding: "60px 7%",
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start"
};

const title: CSSProperties = {
  width: "100%",
  maxWidth: "400px",
  height: "fit-content",
  minHeight: "20px",
  fontWeight: 600,
  padding: "10px 3%",
  textAlign: "left"
};

const description: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "200px",
  textAlign: "left",
  fontSize: "1.15rem",
  padding: "0 3%"
};
