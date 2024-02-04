import styles from "./ClickButton.module.scss";

type clickButtonProps = {
  content: string | number | React.ReactNode;
  link: string;
  target?: string;
};

export const ClickButton = ({ content, link, target }: clickButtonProps) => {
  return (
    <a className={styles.link} href={link} target={target}>
      <button className={styles.button}>{content}</button>
    </a>
  );
};
