import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H2 = ({ title, style, onClick }: headingType) => {
  return (
    <div className={styles.h2} onClick={onClick} style={style}>
      {title}
    </div>
  );
};
