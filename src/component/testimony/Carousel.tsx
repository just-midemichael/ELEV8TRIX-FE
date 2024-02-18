import { useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { H8 } from "../shared/Title/H8";
import {
  carouselContainer,
  carouselWrapper,
  contentBox,
  detailBox,
  nameBox,
  occupationBox,
  buttonRight,
  buttonLeft,
  indicatiorBox
} from "./styles";

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
