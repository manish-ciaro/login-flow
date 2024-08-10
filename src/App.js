import "./App.css";
import { bgColors } from "./styles/Theme";
import { Box, styled, Grid } from "@mui/material";
import Header from "./component/Header";
import Email from "./screens/email/Email";
import PublicRoutes from "./routes/public route/PublicRoutes";

function App() {
  return (
    <Box className="h-screen">
      <Header />
      <PublicRoutes />
    </Box>
  );
}

export default App;
