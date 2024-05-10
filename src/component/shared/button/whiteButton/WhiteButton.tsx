type buttonProps = {
  text: React.ReactNode;
  link: string;
  target?: string;
  wrapperWidth?: string;
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const WhiteButton = ({
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
        style={{
          background: "white",
          width: "140px",
          height: "46px",
          borderRadius: "8px",
          border: "none",
          color: "#3149a1",
          cursor: "pointer",
          fontSize: "0.8rem"
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  );
};

export default WhiteButton;
