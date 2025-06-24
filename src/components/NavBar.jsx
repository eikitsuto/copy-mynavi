import { AppBar, Toolbar, Button } from "@mui/material";

const navBarlist = [
  "トップ",
  "企業検索",
  "マイページ",
  "イベント",
  "WEBセミナー",
  "特集",
  "理系ナビ",
  "就活支援",
];

export default function NavBar() {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        {navBarlist.map((label) => (
          <Button
            key={label}
            sx={{
              width: "150px",
              height: "50px",
              color: "#000",
              fontWeight: 500,
              borderRadius: 0,
              position: "relative",
              "&:hover": {
                color: "#49b2e9",
              },
              "&::after": {
                content: '""',
                display: "block",
                width: "0%",
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
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
