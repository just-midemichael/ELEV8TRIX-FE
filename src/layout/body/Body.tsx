import styles from "./Body.module.scss";

type bodyProps = {
  children: React.ReactNode;
};

const Body = ({ children }: bodyProps) => {
  return <div className={styles.bodyContainer}>{children}</div>;
};

export default Body;
