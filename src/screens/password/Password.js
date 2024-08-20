import React, { useState } from "react";
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
import { superAdminPostData } from "../../services/SuperAdmindLogin";

export default function Password() {
  const [password, setPassword] = useState("");
  
  const onPasswordChange = (event) => {
    setPassword(event.target.value)

  };

  const data = {
    username:localStorage.getItem('superAdminUsername'),
    password:password
  }

  const handleDataSubmit = () => {
    superAdminPostData(data)
  };

  return (
    <GlobleStyle>
      <PasswordBoxStyle>
        <Box className="main-container">
          <Grid container style={{ backgroundColor: bgColors.lightBlue }}>
            <Grid item sm={6} xs={6} md={6} xl={6} lg={6}>
              <Box className="eclipse-style"></Box>
              <img
                src={secondImg}
                alt="second-img"
                className="absolute top-3 w-[36vw] h-auto translate-y-1/4 flex justify-center "
              />
            </Grid>
            <Grid item sm={5} xs={5} md={5} xl={5} lg={5} className="centered-box-container">
              <Box className="centered-box h-4/6 2xl:h-2/3 xl:ml-6 ">
                <Box className="h-4/5 flex flex-col justify-around ">
                  <Box className="welcome-text">
                    <Typography className="welcome-text p-5">
                      Welcome Back Aditya
                    </Typography>
                  </Box>
                  <Input
                    placeholder="Enter your password"
                    value={password}
                    changeHandler={onPasswordChange}
                  />
                  <Box className="link-box">
                    <Link href="/forgot_password" className="link-tag">
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
                    onClick={handleDataSubmit}
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
