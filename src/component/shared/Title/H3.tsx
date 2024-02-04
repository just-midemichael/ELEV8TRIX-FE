import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H3 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h3} onClick={onClick}>
      {title}
    </div>
  );
};
