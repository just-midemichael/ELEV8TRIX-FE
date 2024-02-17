import { headingType } from "./HeadingType";
import styles from "./Title.module.scss";

export const H5 = ({ title, style, onClick }: headingType) => {
  return (
    <div className={styles.h5} onClick={onClick} style={style}>
      {title}
    </div>
  );
};
