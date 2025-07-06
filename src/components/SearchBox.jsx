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
  Container,
} from "@mui/material";

import backgroundImage from "../assets/gray_check03.png";
import SearchCompanyBox from "./SearchCompanyBox";
import SearchSeminar from "./SearchSeminar";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const SearchBox = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ backgroundImage: `url(${backgroundImage})`, height: "380px" }}>
      <Container sx={{ p: 3 }}>
        <Box
          sx={{
            width: "50%",
            border: "1px solid #ddd",
            bgcolor: "white",
          }}
        >
          <Tabs
            value={tabIndex}
            variant="fullWidth"
            TabIndicatorProps={{ style: { display: "none" }, mt: 30 }}
          >
            <Tab
              value={0}
              label={
                <Box display="flex" alignItems="center">
                  <SearchOutlinedIcon sx={{ mr: 1 }} />
                  企業検索
                </Box>
              }
              onClick={() => setTabIndex(0)}
              sx={{
                borderTop:
                  tabIndex === 0
                    ? "3px solid #05AAEB"
                    : "3px solid transparent",
                borderBottom: tabIndex === 1 ? "1px solid #ccc" : "none",
                borderRight: tabIndex === 1 ? "1px solid #ccc" : "none",
              }}
            />

            <Tab
              value={1}
              label={
                <Box display="flex" alignItems="center">
                  <SearchOutlinedIcon sx={{ mr: 1 }} />
                  説明会・セミナー検索
                </Box>
              }
              onClick={() => setTabIndex(1)}
              sx={{
                borderTop:
                  tabIndex === 1
                    ? "3px solid #05AAEB"
                    : "3px solid transparent",
                borderBottom: tabIndex === 0 ? "1px solid #ccc" : "none",
                borderLeft: tabIndex === 0 ? "1px solid #ccc" : "none",
              }}
            />
          </Tabs>

          <Box>
            {tabIndex === 0 && <SearchCompanyBox />}
            {tabIndex === 1 && <SearchSeminar />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchBox;
