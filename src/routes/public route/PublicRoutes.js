import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Email from '../../screens/email/Email'
import Password from "../../screens/password/Password";
import ForgotPassword from "../../screens/forgot password/ForgotPassword";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Email} />
        <Route path="/password" Component={Password} />
        <Route path="/forgot_password" Component={ForgotPassword} />
      </Routes>
    </BrowserRouter>
  );
}
