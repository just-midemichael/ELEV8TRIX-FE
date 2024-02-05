import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H7 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h7} onClick={onClick}>
      {title}
    </div>
  );
};
