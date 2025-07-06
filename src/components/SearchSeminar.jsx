import {
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SearchSeminar = () => {
  return (
    <Box p={2}>
      <Typography>
        新着の説明会公開企業数
        <Box component="span" color="#05AAEB">
          1597
        </Box>
        社
      </Typography>
      <Grid container spacing={2} mt={1}>
        <Grid size={3.16}>
          <FormControl fullWidth>
            <InputLabel>開催月</InputLabel>
            <Select></Select>
          </FormControl>
        </Grid>
        <Grid size={3.17}>
          <FormControl fullWidth>
            <InputLabel>職種</InputLabel>
            <Select></Select>
          </FormControl>
        </Grid>
        <Grid size={3.17}>
          <FormControl fullWidth>
            <InputLabel>エリア</InputLabel>
            <Select></Select>
          </FormControl>
        </Grid>
        <Grid size={2.5}>
          <Button
            fullWidth
            variant="contained"
            color="warning"
            startIcon={<SearchOutlinedIcon />}
            sx={{ height: "100%" }}
          >
            検索
          </Button>
        </Grid>
      </Grid>

      <Box
        onClick={() => navigate("/search")}
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          cursor: "pointer",
          color: "primary.main",
          fontWeight: "bold",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <ArrowForwardIosOutlinedIcon
          sx={{ fontSize: "14px", mr: 0.5, color: "#05AAEB" }}
        />
        <Typography sx={{ fontSize: "14px" }}>より詳細な条件で検索</Typography>
      </Box>
    </Box>
  );
};

export default SearchSeminar;
