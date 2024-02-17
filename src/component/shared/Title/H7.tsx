import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H7 = ({ title, style, onClick }: headingType) => {
  return (
    <div className={styles.h7} onClick={onClick} style={style}>
      {title}
    </div>
  );
};
