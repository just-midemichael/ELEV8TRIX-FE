import { H5 } from "../../shared/Title/H5";
import { H8 } from "../../shared/Title/H8";
import styles from "./MainHero.module.scss";
import { useState } from "react";
import heroImage from "/elev8trixMainHero.png";
import polygon from "/Polygon.png";
import Input from "../../shared/inputForm/Input";
import WhiteButton from "../../shared/button/whiteButton/WhiteButton";
import {
  bannerContainer,
  textFocalContainer,
  textFocalWraper,
  titleBox,
  descriptionBox,
  searchBox,
  imageFocalContainer,
  imageFocalWrapper,
  image
} from "./styles";

const MainHero = () => {
  const [input] = useState();
  return (
    <div className={styles.bannerContainer} style={bannerContainer}>
      <div className={styles.textFocalContainer} style={textFocalContainer}>
        <div className={styles.textFocalWraper} style={textFocalWraper}>
          <div style={titleBox}>
            <H5
              title={
                "Welcome to the Elev8trix: Where your cloud skills are elevated."
              }
            />
          </div>
          <div style={descriptionBox}>
            <H8
              title={
                "Elevating your cloud computing skills from basic to a professional level.Your career focused learning platform."
              }
            />
          </div>
          <div style={searchBox}>
            <div className={styles.searchWrapper}>
              <form className={styles.searchWrapper}>
                <Input
                  className={styles.searchInput}
                  type={"input"}
                  placeholder={"Click here to search for courses"}
                  name={"search courses"}
                  value={input}
                />
                <WhiteButton
                  className={styles.searchButton}
                  text={"search"}
                  link={"/courses"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageFocalContainer} style={imageFocalContainer}>
        <div className={styles.imageFocalWrapper} style={imageFocalWrapper}>
          <img src={heroImage} style={image} alt="elev8trix hero pics" />
          <img
            src={polygon}
            className={styles.polygon}
            alt="elev8trix polygon"
          />
          <img
            src={polygon}
            className={styles.polygon}
            alt="elev8trix polygon"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHero;
