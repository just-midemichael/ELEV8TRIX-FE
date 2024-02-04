import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H2 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h2} onClick={onClick}>
      {title}
    </div>
  );
};
