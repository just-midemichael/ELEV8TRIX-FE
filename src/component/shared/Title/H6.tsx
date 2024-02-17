import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H6 = ({ title, style, onClick }: headingType) => {
  return (
    <div className={styles.h6} onClick={onClick} style={style}>
      {title}
    </div>
  );
};
