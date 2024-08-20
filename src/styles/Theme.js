import { Box, styled } from "@mui/material";

const bgColors = {
  lightBlue: "#A4ECDA",
  darkgreen:'#008C87',
  skyBlue: "#00D9D2",
};
const colors = {
  black: "#000000",
  white: "#FFFFFF",
};
const fontSize = {
  h2: "3rem",
  h3: "2.25rem",
  h4: "1.25rem", //20px
  h5: "1rem", //16px
  h6: "0.9rem", //14px
  h7: "0.8rem", //12px
  p: "0.75rem",
};
const fontWeight = {
  extrabold: 800,
  bold: 700,
  semibold: 600,
  medium:500,
  p1: 400,
};

const GlobleStyle = styled(Box)({
  "& .main-container": {
    backgroundColor: bgColors.darkgreen,
    width: "100vw",
    height: "91vh",
    overflow: "hidden",
  },
  "& .grid-box": {
    gridTemplateColumns: "repeat(auto-fit,minmax(3, 1fr) )",
    gridTemplateRows: "auto",
  },
  "& img": {
    loading: "lazy",
  },
  "& .centered-box": {
    backgroundColor: "#FFFFFF",
    width: "75%",
    borderRadius: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },

  "& .eclipse-style": {
    backgroundColor: "white",
    width: "100%",
    height: "100vh",
    borderRight: "1px inset #008C87",
    borderRadius: "0 50% 50% 0",
    boxShadow: " 25px -4px 0px 0px #008C87",
    transform: "scaleY(1.2)",
    // transform: " translate(15px, -18px)",
    position: " relative",
    right: "20%",
    // rotate:'-6deg',
  },

  "& .welcome-text": {
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.h4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .centered-box-container": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // width:'fit-content'
  },
  "& .welcome-img": {
    position: "absolute",
    zIndex: 1,
    height: "60%",
    width: "40%",
    margin: "auto",
    top: "28vh",
  },
});

export { bgColors, colors, fontSize, fontWeight, GlobleStyle };
