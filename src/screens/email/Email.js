import React from "react";
import {
  bgColors,
  fontSize,
  fontWeight,
  GlobleStyle,
} from "../../styles/Theme";
import { Box, styled, Grid, Typography } from "@mui/material";
import Input from "../../component/CustomeInput";
import CustomeButton from "../../component/CustomeButton";
import welcomeImage from "../../assest/welcome.png";
import eclipse from "../../assest/eclipse.svg";
import googleLogo from "../../assest/google-logo.png";
import office365 from "../../assest/office-365.png";
import { useNavigate } from "react-router";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <GlobleStyle>
      <ContainerStyle>
        <Box className="main-container">
          <Grid container style={{ backgroundColor: bgColors.lightBlue }}>
            <Grid item md={6} xl={6} lg={6}>
              <Box className="relative flex items-center h-[100vh]">
                <img
                  src={welcomeImage}
                  alt="w elcomeImage"
                  className="z-10 absolute w-[38vw] h-auto"
                />
                <img
                  src={eclipse}
                  className="h-[100vh] w-[50vw] relative bottom-14 z-0 2xl:bottom-16 "
                />
              </Box>
            </Grid>
            <Grid item md={5} xl={5} lg={5} className="centered-box-container">
              <Box className="centered-box h-4/6 2xl:h-2/3 xl:ml-6 ">
                <Box className="h-4/5 flex flex-col justify-around ">
                  <Box className="welcome-text">
                    <Typography className="welcome-text p-5">
                      Welcome!!
                    </Typography>
                  </Box>
                  <Input placeholder="Enter your email" />
                  <CustomeButton
                    label="CONTINUE"
                    className="continue-btn"
                    onClick={() => {
                      navigate("/password");
                    }}
                  />
                  <Box>
                    <Box className="logo-container">
                      <img alt="googleLogo" src={googleLogo} />
                      <img alt="office365" src={office365} />
                    </Box>
                    <Box className="border-or-box">
                      <Box className="or-text-border" />
                      <Typography className="or-text">OR</Typography>
                      <Box className="or-text-border" />
                    </Box>
                    <CustomeButton
                      label="SIGN IN WITH SSO"
                      className="sso-btn"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ContainerStyle>
    </GlobleStyle>
  );
}

const ContainerStyle = styled(Box)({
  "& .border-or-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "70%",
    margin: "5% auto",
  },
  "& .logo-container": {
    display: "flex",
    justifyContent: "space-evenly",
    alignProperty: "center",
    width: "60%",
    margin: "0 auto",
  },
  "& .continue-btn": {
    width: "38%",
    height: "45px",
  },
  "& .sso-btn": {
    width: "66%",
    height: "28px",
  },
  "& .or-text": {
    fontSize: fontSize.p,
    fontWeight: fontWeight.semibold,
  },
  "& .or-text-border": {
    borderBottom: "1px solid black",
    width: "40%",
  },
});
