import styles from "./ActionButton.module.scss";

type actionButtonProps = {
  content: string | number | React.ReactNode;
  link: string;
  target?: string;
};

export const ActionButton = ({ content, link, target }: actionButtonProps) => {
  return (
    <a className={styles.link} href={link} target={target}>
      <button className={styles.button}>{content}</button>
    </a>
  );
};
