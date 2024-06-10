import { CSSProperties } from "react";

type inputProps = {
  id?: string;
  className: string;
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onInput?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  defaultValue?: string | number | readonly string[] | undefined;
  value: string | number | readonly string[] | undefined;
  required?: boolean;
  pattern?: string;
};

const Input = ({
  id,
  className,
  type,
  placeholder,
  onChange,
  onFocus,
  onInput,
  name,
  defaultValue,
  value,
  required,
  pattern
}: inputProps) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      defaultValue={defaultValue}
      value={value}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      onInput={onInput}
      placeholder={placeholder}
      style={inputStyle}
      required={required}
      pattern={pattern}
    />
  );
};

export default Input;

const inputStyle: CSSProperties = {
  border: "none",
  outline: "none",
  backgroundColor: "inherit",
  minHeight: "46px",
  width: "100%",
  maxWidth: "338px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 20px",
  overflow: "hidden",
  color: "inherit",
  borderRadius: "inherit",
  textTransform: "capitalize"
};
