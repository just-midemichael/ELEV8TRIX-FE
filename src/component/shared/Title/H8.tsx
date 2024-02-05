import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H8 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h8} onClick={onClick}>
      {title}
    </div>
  );
};
