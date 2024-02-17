import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H8 = ({ title, style, onClick }: headingType) => {
  return (
    <div className={styles.h8} onClick={onClick} style={style}>
      {title}
    </div>
  );
};
