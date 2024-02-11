import { CSSProperties } from "react";

export const bannerContainer: CSSProperties = {
  maxWidth: "1080px",
  width: "100%",
  height: "fit-content",
  borderRadius: "46px",
  backgroundColor: "#3149a1",
  overflow: "hidden",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "30px 16px 0px 16px"
};

export const textFocalContainer: CSSProperties = {
  width: "526px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const imageFocalContainer: CSSProperties = {
  width: "414px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  position: "relative"
};

export const textFocalWraper: CSSProperties = {
  width: "100%",
  height: "314px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const imageFocalWrapper: CSSProperties = {
  width: "100%",
  height: "476px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const titleBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  textAlign: "left",
  padding: "10px",
  overflow: "hidden",
  fontWeight: "900",
  color: "white"
};

export const descriptionBox: CSSProperties = {
  width: "100%",
  height: "35%",
  textAlign: "left",
  padding: "10px",
  overflow: "hidden",
  color: "#119ee3"
};

export const searchBox: CSSProperties = {
  width: "100%",
  height: "20%",
  padding: "10px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden"
};

export const image: CSSProperties = {
  width: "100%",
  height: "100%",
  zIndex: "3"
};
