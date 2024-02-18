import { CSSProperties, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { H8 } from "../shared/Title/H8";

interface carouselProps {
  name: string[];
  content: string[];
  occupation: string[];
  interval: number;
}

const Carousel = ({ name, content, occupation, interval }: carouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const gotoNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % content.length);
  };

  const gotoPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + content.length) % content.length);
  };

  useEffect(() => {
    const intervalId = setInterval(gotoNextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div style={carouselContainer}>
      <div className={styles.carouselWrapper} style={carouselWrapper}>
        <div style={contentBox}>
          <H8 title={`" ${content[currentSlide]} "`} />{" "}
        </div>
        <div className={styles.detailBox} style={detailBox}>
          <div className={styles.name} style={nameBox}>
            {name[currentSlide]}
          </div>
          <div className={styles.occupation} style={occupationBox}>
            {occupation[currentSlide]}
          </div>
        </div>
        <button
          className={styles.button}
          onClick={() => gotoPrevSlide()}
          style={buttonRight}
        >
          <ArrowCircleRightOutlinedIcon
            style={{
              height: "30px",
              width: "30px",
              color: "black",
              fontWeight: 900
            }}
          />
        </button>
        <button
          className={styles.button}
          onClick={() => gotoNextSlide()}
          style={buttonLeft}
        >
          <ArrowCircleLeftOutlinedIcon
            style={{
              height: "30px",
              width: "30px",
              color: "black",
              fontWeight: 900
            }}
          />
        </button>
      </div>
      <div style={indicatiorBox}>
        {content.map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === currentSlide ? "black" : "#119ee3",
              width: "10px",
              height: "10px",
              borderRadius: "100%",
              cursor: "pointer"
            }}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

const carouselContainer: CSSProperties = {
  width: "100%",
  height: "500px",
  position: "relative",
  padding: "20px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
};

const carouselWrapper: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "30px",
  backgroundColor: "#3149A1",
  overflow: "hidden",
  padding: "40px 2%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const contentBox: CSSProperties = {
  width: "100%",
  height: "70%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  padding: "10px",
  fontSize: "1rem"
};

const detailBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const nameBox: CSSProperties = {
  width: "30%",
  minWidth: "200px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px",
  fontWeight: 800,
  fontSize: "0.95rem"
};

const occupationBox: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px",
  fontSize: "0.95rem"
};

const buttonLeft: CSSProperties = {
  position: "absolute",
  backgroundColor: "transparent",
  left: "-14px",
  border: "none",
  cursor: "pointer"
};

const buttonRight: CSSProperties = {
  position: "absolute",
  backgroundColor: "transparent",
  right: "-14px",
  border: "none",
  cursor: "pointer"
};

const indicatiorBox: CSSProperties = {
  width: "100%",
  height: "10%",
  minHeight: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 8
};
