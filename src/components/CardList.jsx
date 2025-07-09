import { Container, Box, Grid } from "@mui/material";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const CardList = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ my: 3 }}>
        <Grid size={3}>
          <img src={card1} style={{ width: "100%" }} />
        </Grid>
        <Grid size={3}>
          <img src={card2} style={{ width: "100%" }} />
        </Grid>
        <Grid size={3}>
          <img src={card3} style={{ width: "100%" }} />
        </Grid>
        <Grid size={3}>
          <img src={card4} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardList;
