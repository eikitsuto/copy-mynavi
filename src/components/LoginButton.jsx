import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";

const LoginButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<LockOutlinedIcon />}
      sx={{
        py: 1,
        borderRadius: "0",
        fontWeight: "light",
        fontSize: "1rem",
        width: "30%",
        border: "1px solid #bbb",
      }}
    >
      ログイン
    </Button>
  );
};

export default LoginButton;
