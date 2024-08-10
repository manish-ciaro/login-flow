import { Box, Button, styled } from "@mui/material";
import React from "react";
import { bgColors, colors, fontSize, fontWeight } from "../styles/Theme";

export default function CustomeButton(props) {
  const { label, className, onClick } = props;
  return (
    <CustomeBtnStyle>
      <Box className="btn-container">
        <Button
          style={{
            borderRadius: "20px",
            backgroundColor: bgColors.skyBlue,
            color: colors.white,
            fontWeight: fontWeight.semibold,
            fontSize: fontSize.h6,
            fontFamily: "Poppins",
          }}
          className={className}
          onClick={onClick}
        >
          {label}
        </Button>
      </Box>
    </CustomeBtnStyle>
  );
}

const CustomeBtnStyle = styled(Box)({
  "& .btn-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "8%",
  },
  "& .btn-style": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "8%",
  },
});
