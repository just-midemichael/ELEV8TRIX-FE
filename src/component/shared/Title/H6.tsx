import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H6 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h6} onClick={onClick}>
      {title}
    </div>
  );
};
