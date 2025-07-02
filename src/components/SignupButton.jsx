import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button } from "@mui/material";

const SignupButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<ExitToAppIcon />}
      color="warning"
      sx={{
        py: 1,
        borderRadius: "0",
        fontWeight: "light",
        fontSize: "1rem",
        width: "30%",
        mr: 3,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none", // ← ホバー時の影も消す
        },
      }}
    >
      会員登録
    </Button>
  );
};

export default SignupButton;
