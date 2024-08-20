import { Box, styled } from "@mui/material";
import React from "react";
import logo from "../assest/logo.png"

export default function Header() {
  return (
    <HeaderStyle>
      <Box>
        <Box className="header-box">
          <img src={logo} className="img-container" />
        </Box>
      </Box>
    </HeaderStyle>
  );
}

const HeaderStyle = styled(Box)({
  "& .header-box": {
    width: '100vw',
    height: '9vh',
    // position:'fixed'
  },
  "& .img-container": {
    position: "relative",
    top: "-2vh",
    left: "5vw",
  },
});
