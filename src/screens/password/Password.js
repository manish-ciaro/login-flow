import React from "react";
import {
  bgColors,
  fontSize,
  fontWeight,
  GlobleStyle,
} from "../../styles/Theme";
import { Box, styled, Grid, Typography, Link } from "@mui/material";
import Input from "../../component/CustomeInput";
import CustomeButton from "../../component/CustomeButton";
import secondImg from "../../assest/image02.png";
import eclipse from "../../assest/eclipse.svg";
import { useNavigate } from "react-router";

export default function Password() {
  const navigate = useNavigate();

  return (
    <GlobleStyle>
      <PasswordBoxStyle>
        <Box className="main-container">
          <Grid container style={{ backgroundColor: bgColors.lightBlue }}>
            <Grid item md={6} xl={6} lg={6}>
              <Box className="relative flex items-center h-[100vh]">
                <img
                  src={secondImg}
                  alt="Password screen image"
                  className="z-10 absolute w-[38vw] h-auto"
                />
                <img
                  src={eclipse}
                  className=" h-[100vh] w-[50vw] relative bottom-14 z-0 2xl:bottom-16 "
                />
              </Box>
            </Grid>
            <Grid item md={5} xl={5} lg={5} className="centered-box-container">
              <Box className="centered-box h-4/6 2xl:h-2/3 xl:ml-6 ">
                <Box className="h-4/5 flex flex-col justify-around ">
                  <Box className="welcome-text">
                    <Typography className="welcome-text p-5">
                      Welcome Back Aditya
                    </Typography>
                  </Box>
                  <Input placeholder="Enter your password" />
                  <Box className="link-box">
                    <Link className="link-tag">
                      <Typography className="link-text">
                        Forgot your password?
                      </Typography>
                    </Link>
                    <Link className="link-tag">
                      <Typography className="link-text">
                        Login without using Email
                      </Typography>
                    </Link>
                  </Box>
                  <CustomeButton
                    label="LOGIN"
                    className="login-btn"
                    onClick={() => {
                      navigate("/password");
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </PasswordBoxStyle>
    </GlobleStyle>
  );
}

const PasswordBoxStyle = styled(Box)({
  "& .link-tag": {
    textDecoration: "none",
  },
  "& .link-text": {
    textDecoration: "none",
    color: bgColors.skyBlue,
    fontSize: fontSize.h6,
    fontWeight: fontWeight.semibold,
  },
  "& .link-box": {
    display: "grid",
    gap: "15px",
    padding: "5% 8%",
  },
  "& .login-btn": {
    height: "45px",
    width: "30%",
  },
});
