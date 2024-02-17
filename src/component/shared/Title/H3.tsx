import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H3 = ({ title, style, onClick }: headingType) => {
  return (
    <div className={styles.h3} onClick={onClick} style={style}>
      {title}
    </div>
  );
};
