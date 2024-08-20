import React, { useState } from "react";
import {
  bgColors,
  fontSize,
  fontWeight,
  GlobleStyle,
} from "../../styles/Theme";
import { Box, styled, Grid, Typography, Link } from "@mui/material";
import OTPInput from "react-otp-input";
import CustomeButton from "../../component/CustomeButton";
import secondImg from "../../assest/image02.png";
import { useNavigate } from "react-router";

export default function OtpScreen() {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");

  return (
    <GlobleStyle>
      <OtpScreenStyle>
        <Box className="main-container">
          <Grid container style={{ backgroundColor: bgColors.lightBlue }}>
            <Grid item md={6} xl={6} lg={6}>
              <Box className="eclipse-style"></Box>
              <img
                src={secondImg}
                alt="forgotPasswordImg"
                className="absolute top-3 w-[36vw] h-auto translate-y-1/4 flex justify-center "
              />
            </Grid>
            <Grid item md={5} xl={5} lg={5} className="centered-box-container">
              <Box className="centered-box h-4/6 2xl:h-2/3 xl:ml-6 ">
                <Box className="h-4/5 flex flex-col justify-around ">
                  <Box className="">
                    <Typography className="verify-otp-heading p-5 pb-0">
                      Enter verification code
                    </Typography>
                    <Typography className="p-5 pt-0 sub-heading-text">
                      We’ve sent a code to te*****
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <OTPInput
                      value={OTP}
                      onChange={setOTP}
                      numInputs={6}
                      renderSeparator={<span style={{ width: "10px" }}></span>}
                      // isInputNum={true}
                      className="otp-input-style"
                      inputType='number'
                      containerStyle={{}}
                      shouldAutoFocus={true}
                      inputStyle={{
                        border: "1px solid black",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue",
                      }}
                      focusStyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none",
                      }}
                      renderInput={(props) => <input {...props} />}
                    />
                  </Box>
                  <Box className="link-box">
                    <Typography className="resend-code">
                      Didn’t get a code?
                    </Typography>
                    <Link href="/" className="link-tag">
                      <Typography className="link-text resend-code px-1">
                        Click to resend
                      </Typography>
                    </Link>
                  </Box>
                  <CustomeButton
                    label="Verify"
                    className="verify-btn"
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </OtpScreenStyle>
    </GlobleStyle>
  );
}

const OtpScreenStyle = styled(Box)({
  "& .link-tag": {
    textDecoration: "none",
  },
  '& input::-webkit-inner-spin-button': {
    webkitAppearance: 'none',
    margin: 0,
  },
  "& .link-text": {
    textDecoration: "none",
    color: bgColors.skyBlue,
  },
  "& .link-box": {
    display: "flex",
    alignItems: "baseline",
    padding: "0 8%",
  },
  "& .resend-code": {
    fontSize: fontSize.h6,
    fontWeight: fontWeight.semibold,
  },
  "& .verify-btn": {
    width: "35%",
    height: "7vh",
  },
  "& .verify-otp-heading": {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h4,
  },
  "& .sub-heading-text": {
    fontWeight: fontWeight.medium,
  },
});
