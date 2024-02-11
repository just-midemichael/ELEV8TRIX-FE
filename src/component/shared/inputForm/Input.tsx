import { CSSProperties } from "react";

type inputProps = {
  className: string;
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  value: string | number | readonly string[] | undefined;
};

const Input = ({
  className,
  type,
  placeholder,
  onChange,
  name,
  value
}: inputProps) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      style={inputStyle}
    />
  );
};

export default Input;

const inputStyle: CSSProperties = {
  border: "none",
  outline: "none",
  backgroundColor: "white",
  minHeight: "46px",
  width: "100%",
  maxWidth: "338px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 20px",
  overflow: "hidden",
  color: "inherit",
  borderRadius: "inherit"
};
