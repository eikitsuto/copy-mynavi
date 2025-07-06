import { useState } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { Box, Button, Container, Typography } from "@mui/material";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("トップ");

  return (
    <Box sx={{ backgroundColor: "#eee" }}>
      <Header />
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", m: "10px 0px" }}>
          <SignupButton />
          <LoginButton />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderLeft: "1px solid #bbb",
              height: 28,
              ml: 7,
              pl: 3,
            }}
          >
            <ArrowForwardIosOutlinedIcon
              sx={{ fontSize: 14, mr: 0.5, color: "#49b2e9" }}
            />
            <Typography color="primary" sx={{ fontSize: 14 }}>
              お問い合わせ・よくある質問
            </Typography>
          </Box>
        </Box>
      </Container>
      <SearchBox />
    </Box>
  );
}
