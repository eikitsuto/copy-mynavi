// Header.jsx
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
} from "@mui/material";
import mynaviLogo from "../assets/mynavi_2026.png";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #ccc" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={mynaviLogo}
              alt="マイナビのロゴ"
              height={65}
              style={{ marginRight: 10 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontSize={14}>学生のための就職情報サイト</Typography>
              <Link fontSize={14} underline="hover" color="primary" href="#">
                &gt; 2026年卒業予定（大学4年生・院2年生）の方はこちら
              </Link>
            </Box>
          </Box>
        </Toolbar>
        <NavBar />
      </Container>
    </AppBar>
  );
}
