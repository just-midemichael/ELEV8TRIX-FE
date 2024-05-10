interface buttonProps {
  height: string;
  minHeight: string;
  width: string;
  minWidth: string;
  buttonColor: string;
  textColor: string;
  fontSize: string;
  fontWeight: number;
  cursor: string;
  borderRadius: string;
  border: string;
  text: React.ReactNode;
  link: string;
  target?: string;
  wrapperWidth?: string;
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const GlobalButton = ({
  height,
  minHeight,
  width,
  minWidth,
  buttonColor,
  textColor,
  fontSize,
  fontWeight,
  cursor,
  borderRadius,
  border,
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
          background: `${buttonColor}`,
          width: `${width}`,
          minWidth: `${minWidth}`,
          height: `${height}`,
          minHeight: `${minHeight}`,
          borderRadius: `${borderRadius}`,
          border: `${border}`,
          color: `${textColor}`,
          cursor: `${cursor}`,
          fontSize: `${fontSize}`,
          fontWeight: `${fontWeight}`
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  );
};

export default GlobalButton;
