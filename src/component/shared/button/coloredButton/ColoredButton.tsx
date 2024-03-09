type buttonProps = {
  text: React.ReactNode;
  link?: string;
  target?: string;
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ColoredButton = ({
  text,
  link,
  target,
  className,
  onClick
}: buttonProps) => {
  return (
    <a href={link} target={target}>
      <button
        className={className}
        style={{
          background: "#3149a1",
          width: "140px",
          height: "46px",
          borderRadius: "8px",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "0.8rem",
          fontWeight: "600"
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  );
};

export default ColoredButton;
