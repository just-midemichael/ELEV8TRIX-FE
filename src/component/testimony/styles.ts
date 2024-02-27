import { CSSProperties } from "react";

export const carouselContainer: CSSProperties = {
  width: "100%",
  height: "500px",
  position: "relative",
  padding: "20px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
};

export const carouselWrapper: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "30px",
  backgroundColor: "white",
  overflow: "hidden",
  padding: "40px 2%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "1px 1px 10px 2px rgba(192, 192, 192, 0.666)"
};

export const contentBox: CSSProperties = {
  width: "100%",
  height: "70%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  padding: "10px",
  fontSize: "1rem",
  color: "black"
};

export const detailBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const avatarBox: CSSProperties = {
  width: "100px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px"
};

export const avatarStyle: CSSProperties = {
  width: "64px",
  height: "64px"
};

export const textBox: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "10px"
};

export const nameBox: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "5px 10px",
  fontWeight: 900,
  fontSize: "1.15rem",
  color: "#3149A1"
};

export const occupationBox: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "5px 10px",
  fontSize: "1.05rem",
  color: "black",
  fontWeight: 500
};

export const buttonLeft: CSSProperties = {
  position: "absolute",
  backgroundColor: "transparent",
  left: "-14px",
  border: "none",
  cursor: "pointer"
};

export const buttonRight: CSSProperties = {
  position: "absolute",
  backgroundColor: "transparent",
  right: "-14px",
  border: "none",
  cursor: "pointer"
};

export const indicatorBox: CSSProperties = {
  width: "100%",
  height: "10%",
  minHeight: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 6
};
