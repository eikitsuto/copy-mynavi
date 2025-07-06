import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
  Tooltip,
  MenuItem,
} from "@mui/material";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const industries = [
  "指定しない",
  "メーカー",
  "商社",
  "流通・小売",
  "金融",
  "サービス・インフラ",
  "ソフトウェア・通信",
  "広告・出版・マスコミ",
  "官公庁・公社・団体",
  "【人気】食品",
  "【人気】住宅・インテリア",
  "【人気】専門店",
  "【人気】不動産",
  "【人気】薬品・化粧品",
];

const OccupationList = [
  "指定しない",
  "一般事務・管理",
  "営業",
  "マーケティング",
  "販売・サービス",
  "IT系",
  "基礎研究",
  "応用研究",
  "機会・電子機器設計",
  "建築土木設計・測量・積算",
  "生産・製造技術",
  "品質・生産管理・メンテナンス",
  "施工管理",
];

const regions = [
  "指定しない",
  "北海道",
  "東北",
  "関東",
  "中部",
  "近畿",
  "中国",
  "四国",
  "九州・沖縄",
];

const SearchCompanyBox = () => {
  const [industry, setIndustry] = useState("");
  const [job, setJob] = useState("");
  const [region, setRegion] = useState("");

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box p={2}>
      <Typography>
        全記載企業数
        <Box component="span" color="#05AAEB">
          31317
        </Box>
        社
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ mt: 1, mb: 2, pb: 2, borderBottom: "1px solid #ccc" }}
      >
        <Grid size={{ xs: 9.5 }}>
          <TextField fullWidth placeholder="企業名や業種などで探す" />
        </Grid>
        <Grid size={{ xs: 2.5 }}>
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

      <Grid container spacing={2} mt={1}>
        <Grid size={3.16}>
          <FormControl fullWidth>
            <InputLabel>業種</InputLabel>
            <Select
              labelId="industry-label"
              value={industry}
              label="業種"
              onChange={handleIndustryChange}
            >
              {industries.map((industry, index) => (
                <MenuItem key={index} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3.17}>
          <FormControl fullWidth>
            <InputLabel>職種</InputLabel>
            <Select
              labelId="job-label"
              value={job}
              label="職種"
              onChange={handleJobChange}
            >
              {OccupationList.map((occupation, index) => (
                <MenuItem key={index} value={occupation}>
                  {occupation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3.17}>
          <FormControl fullWidth>
            <InputLabel>エリア</InputLabel>
            <Select
              labelId="region-label"
              value={region}
              label="エリア"
              onChange={handleRegionChange}
            >
              {regions.map((region, index) => (
                <MenuItem key={index} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
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

      <FormControlLabel
        control={<Checkbox />}
        label={
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography sx={{ fontWeight: "light", fontSize: "14px" }}>
              My CareerBoxで応募可
            </Typography>
            <Tooltip
              title="My CareerBoxは、企業への提出物を一括管理・提出できる機能です。"
              arrow
            >
              <HelpOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#1976d2" }}
              />
            </Tooltip>
          </Box>
        }
      />
      <Box
        onClick={() => navigate("/search")}
        sx={{
          display: "flex",
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

export default SearchCompanyBox;
