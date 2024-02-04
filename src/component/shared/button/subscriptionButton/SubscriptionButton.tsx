import styles from "./SubscriptionButton.module.scss";

type subButtonProps = {
  content: string | number | React.ReactNode;
  link: string;
  target?: string;
};
export const SubscriptionButton = ({
  content,
  link,
  target
}: subButtonProps) => {
  return (
    <a className={styles.link} href={link} target={target}>
      <button className={styles.button}>{content}</button>
    </a>
  );
};
