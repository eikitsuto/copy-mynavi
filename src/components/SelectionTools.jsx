import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  Grid,
  Paper,
  Chip,
} from "@mui/material";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const SelectionTools = () => {
  return (
    <Container>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box sx={{ width: "90%", mx: "auto", py: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: 3 }}>
            自己分析・選考対策
          </Typography>

          <Grid container spacing={4}>
            <Grid size={6}>
              <Box
                elevation={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={image1}
                  sx={{
                    width: 70,
                    height: 70,
                    mr: 2,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Chip
                    label="言語・非言語の試験対策"
                    color="primary"
                    size="small"
                    sx={{ mb: 0.5, borderRadius: "4px" }}
                  />
                  <Typography sx={{ mb: 0.5 }}>
                    適性検査対策WEBテスト
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    <Box
                      sx={{ backgroundColor: "#eee", display: "inline-block" }}
                    >
                      全国一斉WEB模擬テスト：
                      <Box component="span" fontWeight="bold">
                        全日程開催終了
                      </Box>
                    </Box>
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: 80, height: 40, ml: 2 }}
                >
                  受験
                </Button>
              </Box>
            </Grid>

            <Grid size={6}>
              <Box elevation={1} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={image2}
                  sx={{
                    width: 70,
                    height: 70,
                    mr: 2,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Chip
                    label="向いている業界などがわかる"
                    color="primary"
                    size="small"
                    sx={{ mb: 0.5, borderRadius: "4px" }}
                  />
                  <Typography sx={{ mb: 0.5 }}>適正診断MATCH plus</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: 80, height: 40, ml: 2 }}
                >
                  受験
                </Button>
              </Box>
            </Grid>

            <Grid size={6}>
              <Box elevation={1} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={image3}
                  sx={{
                    width: 70,
                    height: 70,
                    mr: 2,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Chip
                    label="たった3分で簡単自己分析"
                    color="primary"
                    size="small"
                    sx={{ mb: 0.5, borderRadius: "4px" }}
                  />
                  <Typography sx={{ mb: 0.5 }}>長所・短所診断</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: 80, height: 40, ml: 2 }}
                >
                  受験
                </Button>
              </Box>
            </Grid>

            <Grid size={6}>
              <Box elevation={1} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={image4}
                  sx={{
                    width: 70,
                    height: 70,
                    mr: 2,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Chip
                    label="友達に分析をお願い"
                    color="primary"
                    size="small"
                    sx={{ mb: 0.5, borderRadius: "4px" }}
                  />
                  <Typography sx={{ mb: 0.5 }}>お願い！他己分析</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: 80, height: 40, ml: 2 }}
                >
                  受験
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SelectionTools;
