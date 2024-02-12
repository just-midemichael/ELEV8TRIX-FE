import Input from "../../shared/inputForm/Input";
import styles from "./CourseHero.module.scss";
import { H5 } from "../../shared/Title/H5";
import { H8 } from "../../shared/Title/H8";
import WhiteButton from "../../shared/button/whiteButton/WhiteButton";
import polygon from "/smallPolygon.png";
import {
  bannerContainer,
  textFocalContainer,
  textFocalWraper,
  titleBox,
  descriptionBox,
  searchBox
} from ".";
import { useState } from "react";

const CourseHero = () => {
  const [input] = useState();
  return (
    <div>
      <div className={styles.bannerContainer} style={bannerContainer}>
        <div className={styles.textFocalContainer} style={textFocalContainer}>
          <div className={styles.textFocalWraper} style={textFocalWraper}>
            <div style={titleBox}>
              <H5 title={"Our Courses"} />
            </div>
            <div style={descriptionBox}>
              <H8
                title={
                  "Lorem ipsum dolor sit amet consectetur. Ut porttitor aliquam laoreet enim. Sapien faucibus nam sagittis tempus suspendisse enim at."
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
                    name={"search box"}
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
        <img src={polygon} className={styles.polygon} alt="elev8trix polygon" />
        <img src={polygon} className={styles.polygon} alt="elev8trix polygon" />
      </div>
    </div>
  );
};

export default CourseHero;
