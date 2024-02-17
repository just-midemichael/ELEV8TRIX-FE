import { CSSProperties } from "react";

export type headingType = {
  title: string | number;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler;
};
