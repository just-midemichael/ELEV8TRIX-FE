import { CSSProperties } from "react";
import { H5 } from "../shared/Title/H5";
import Carousel from "./Carousel";
import polygon from "/smallPolygon.png";

const Testimony = () => {
  const content = [
    "Content 1 Lorem ipsum dolor sit amet consectetur. Ut porttitor aliquam laoreet enim. Sapien faucibus nam sagittis tempus suspendisse enim at. Elit aliquam id malesuada feugiat gravida elementum. Facilisis viverra interdum platea lectus. Sit arcu egestas laoreet scelerisque integer. Amet diam libero sit rutrum vitae felis. Vitae mattis interdum justo tortor malesuada. Turpis cursus placerat condimentum consectetur lectus feugiat suspendisse volutpat donec",
    "Content 2 Lorem ipsum dolor sit amet consectetur. Ut porttitor aliquam laoreet enim. Sapien faucibus nam sagittis tempus suspendisse enim at. Elit aliquam id malesuada feugiat gravida elementum. Facilisis viverra interdum platea lectus. Sit arcu egestas laoreet scelerisque integer. Amet diam libero sit rutrum vitae felis. Vitae mattis interdum justo tortor malesuada. Turpis cursus placerat condimentum consectetur lectus feugiat suspendisse volutpat donec",
    "Content 3 Lorem ipsum dolor sit amet consectetur. Ut porttitor aliquam laoreet enim. Sapien faucibus nam sagittis tempus suspendisse enim at. Elit aliquam id malesuada feugiat gravida elementum. Facilisis viverra interdum platea lectus. Sit arcu egestas laoreet scelerisque integer. Amet diam libero sit rutrum vitae felis. Vitae mattis interdum justo tortor malesuada. Turpis cursus placerat condimentum consectetur lectus feugiat suspendisse volutpat donec"
  ];
  const name = ["Name 1", "Name 2", "Name 3"];
  const occupation = ["Occupation 1", "Occupation 2", "Occupation 3"];
  return (
    <div style={container}>
      <div style={titleBox}>
        <H5 title={"Testimonials"} />
      </div>
      <div style={carouselBox}>
        <Carousel
          name={name}
          content={content}
          occupation={occupation}
          interval={4000}
        />
      </div>
      <img src={polygon} style={polygonShape} />
    </div>
  );
};

export default Testimony;

const container: CSSProperties = {
  width: "100%",
  maxWidth: "700px",
  height: "fit-content",
  minHeight: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const titleBox: CSSProperties = {
  height: "50px",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontWeight: 800,
  textAlign: "left"
};

const carouselBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10
};

const polygonShape: CSSProperties = {
  position: "absolute",
  right: "100px",
  zIndex: 5,
  width: "130px",
  height: "150px",
  transform: "translateY(-140%)"
};
