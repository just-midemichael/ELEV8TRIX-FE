import { CSSProperties } from "react";

export const subscriptionContianer: CSSProperties = {
  height: "fit-content",
  minHeight: "370px",
  width: "100%",
  backgroundColor: "#7EC2FF",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: "5% 20px"
};

export const subscriptionWrapper: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: "240px",
  maxWidth: "640px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 6
};

export const titleBox: CSSProperties = {
  height: "fit-content",
  minHeight: "80px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  fontWeight: "900"
};

export const descriptionBox: CSSProperties = {
  height: "fit-content",
  minHeight: "80px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  fontWeight: "500"
};

export const formBox: CSSProperties = {
  height: "fit-content",
  minHeight: "80px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
};

export const form: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "560px",
  borderRadius: "10px",
  overflow: "hidden"
};

export const polygonStyle: CSSProperties = {
  position: "absolute",
  left: "5%",
  zIndex: 2
};

export const mailStyle: CSSProperties = {
  position: "absolute",
  right: 0,
  bottom: 0,
  zIndex: 2,
  opacity: 0.2
};
