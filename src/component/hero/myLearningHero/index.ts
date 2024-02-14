import { CSSProperties } from "react";

export const bannerContainer: CSSProperties = {
  maxWidth: "1080px",
  width: "100%",
  height: "476px",
  borderRadius: "46px",
  backgroundColor: "#3149a1",
  overflow: "hidden",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "30px 16px",
  position: "relative"
};

export const textFocalContainer: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "6"
};

export const textFocalWraper: CSSProperties = {
  width: "100%",
  maxWidth: "600px",
  minHeight: "fit-content",
  height: "314px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const titleBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  textAlign: "center",
  padding: "10px",
  overflow: "hidden",
  fontWeight: "900",
  color: "white"
};
