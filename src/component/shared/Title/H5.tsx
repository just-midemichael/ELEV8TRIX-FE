import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H5 = ({ title, onClick }: headingType) => {
  return (
    <div className={styles.h5} onClick={onClick}>
      {title}
    </div>
  );
};
