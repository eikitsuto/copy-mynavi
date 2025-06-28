import { Toolbar, Button, Grid } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navBarlist = [
    { label: "トップ", path: "/" },
    { label: "企業検索", path: "/company" },
    { label: "マイページ", path: "/mypage" },
    { label: "イベント", path: "/event" },
    { label: "WEBセミナー", path: "/seminar" },
    { label: "特集", path: "/sp" },
    { label: "理系ナビ", path: "/sci" },
    { label: "就活支援", path: "/support" },
  ];

  return (
    // disableGutters => 左右の余白を0にする
    <Toolbar disableGutters sx={{ gap: 2, height: "40px" }}>
      {navBarlist.map((item) => (
        <Button
          key={item.path}
          to={item.path}
          component={NavLink}
          fullWidth
          sx={{
            height: "100%",
            borderRadius: 0,
            position: "relative",
            color: location.pathname === item.path ? "#49b2e9" : "text.primary",
            "&:hover": {
              color: "#49b2e9",
            },
            "&::after": {
              content: '""',
              display: "block",
              width: location.pathname === item.path ? "100%" : "0%",
              height: "2px",
              backgroundColor: "#49b2e9",
              position: "absolute",
              bottom: 0,
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Toolbar>
  );
}
