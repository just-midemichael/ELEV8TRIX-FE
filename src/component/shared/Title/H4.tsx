import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H4 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h4} onClick={onClick}>
      {title}
    </div>
  );
};
