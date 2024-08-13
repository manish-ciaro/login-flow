import "./App.css";
import { Box } from "@mui/material";
import Header from "./component/Header";
import PublicRoutes from "./routes/public route/PublicRoutes";

function App() {
  return (
    <Box className="h-screen"  >
      <Header />
      <PublicRoutes />
    </Box>
  );
}

export default App;
