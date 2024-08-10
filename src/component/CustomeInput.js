import { Box, colors, styled } from "@mui/material";
import React from "react";
import { fontSize, fontWeight } from "../styles/Theme";

export default function Input(props) {
  const { name, value, changeHandler, label, type, placeholder } = props;
  return (
    <InputStyle>
      <Box style={{ width: "100%" }}>
        <label className="label-text">{label}</label>
        <input
          name={name}
          className="input-style"
          value={value}
          onChange={changeHandler}
          type={type}
          placeholder={placeholder}
        />
      </Box>
    </InputStyle>
  );
}

const InputStyle = styled(Box)({
  "& .input-style": {
    width: "80%",
    marginLeft: "8%",
    height: "8vh",
    borderRadius: "20px",
    border: '2px inset black',
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.h4,
  },
  "& .input-style::placeholder": {
    color:'rgba(0, 0, 0, 0.5)',
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.h4,
    padding: '5%'
  },
});
