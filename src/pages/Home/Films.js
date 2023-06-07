import React from "react";
import Grid from "@mui/material/Grid";
import films from "../../List/ListOfFilms";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#282424",
  color: "#f0f0f0",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "relative",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: "white",
}));

const InfoTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "white",
}));

const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
  },
}));

const DetailButton = styled(Button)(({ theme }) => ({
  color: "#f0f0f0",
  padding: "8px 16px",
  border: "none",
  cursor: "pointer",
}));

export default function Films() {
  return (
    <Container>
      <Grid container spacing={2}>
        {films.map((film) => (
          <Grid item xs={12} sm={6} md={4} key={film.id}>
            <StyledCard>
              <CardMedia
                component="img"
                image={film.image}
                alt="Image Alt Text"
              />
              <Overlay>
                <DetailButton component={Link} to={`detail/${film.id}`}>
                  <PlayArrow sx={{ fontSize: 80 }} />
                </DetailButton>
              </Overlay>
              <CardContent>
                <TitleTypography gutterBottom variant="h5" component="div">
                  {film.title}
                </TitleTypography>
                <InfoTypography variant="body2" color="text.secondary">
                  {film.name} - {film.info}
                </InfoTypography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
