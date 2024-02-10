import ColoredButton from "../../shared/button/coloredButton/ColoredButton";
import styles from "./GlobalCard.module.scss";

type cardProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const GlobalCard = ({
  image,
  title,
  description,
  buttonText,
  buttonLink
}: cardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src={image}
            alt="elev8trix illustration"
          />
        </div>
        <div className={styles.textBox}>
          <div className={styles.textTitle}>{title}</div>
          <div className={styles.textDescription}>{description}</div>
        </div>
        <div className={styles.buttonBox}>
          <ColoredButton
            text={buttonText}
            link={buttonLink}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalCard;
