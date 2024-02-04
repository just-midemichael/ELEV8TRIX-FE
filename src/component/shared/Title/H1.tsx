import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H1 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h1} onClick={onClick}>
      {title}
    </div>
  );
};
