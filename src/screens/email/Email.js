import React, { useEffect, useState } from "react";
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
import googleLogo from "../../assest/google-logo.png";
import office365 from "../../assest/office-365.png";
import { useNavigate } from "react-router";

export default function WelcomeScreen() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    storeMail()
  }, [email]);

  const storeMail = () =>{
    localStorage.setItem('superAdminUsername', email)
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
  };
  const handleClick = () => {
    if(email){ 
     return navigate("/password");
    }
    else return ;
  };
  return (
    <GlobleStyle>
      <ContainerStyle>
        <Box className="main-container">
          <Grid container style={{ backgroundColor: bgColors.lightBlue }}>
            <Grid item sm={6} xs={6} md={6} xl={6} lg={6} >
              <Box className="eclipse-style"></Box>
              <img
                src={welcomeImage}
                alt="welcomeImage"
                className="absolute top-3 w-[36vw] h-auto translate-y-1/4 flex justify-center "
              />
            </Grid>
            <Grid item sm={5} xs={5} md={5} xl={5} lg={5} className="centered-box-container">
              <Box className="centered-box h-4/6 2xl:h-2/3 xl:ml-6 ">
                <Box className="h-4/5 flex flex-col justify-around ">
                  <Box className="welcome-text">
                    <Typography className="welcome-text p-5">
                      Welcome!!
                    </Typography>
                  </Box>
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    changeHandler={handleChange}
                  />
                  <CustomeButton
                    label="CONTINUE"
                    className="continue-btn"
                    onClick={handleClick}

                    //   () => {
                    // }
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

  // '& .circle':{
  //   borderRight: '20px solid #008C87',
  //   height:'100vh',
  //   width:'80%',
  //   borderRadius: '50%',
  //   boxShadow:' 10px 0px 0px 0px ',
  //   padding: '5%',
  //   filter:' drop-shadow(30px 10px 4px #4444dd)',
  // },
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
