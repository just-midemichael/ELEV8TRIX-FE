type buttonProps = {
  text: React.ReactNode;
  link?: string;
  target?: string;
  wrapperWidth?: string;
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ColoredButton = ({
  text,
  link,
  target,
  wrapperWidth,
  className,
  onClick
}: buttonProps) => {
  return (
    <a
      href={link}
      target={target}
      style={{ width: `${wrapperWidth}`, height: "fit-content" }}
    >
      <button
        className={className}
        type="button"
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
