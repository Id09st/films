import React from "react";
import Grid from "@mui/material/Grid";
import films from "../../List/ListOfFilms";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Rating,
} from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#696969",
  color: "#f0f0f0",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "relative",
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "400px", // Kích thước chiều rộng mới
  height: "500px", // Kích thước chiều cao mới
  objectFit: "cover", // Kiểu căn chỉnh ảnh
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
  padding: "8px 20px",
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
              <CustomCardMedia
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
                <Rating
                  name="half-rating-read"
                  defaultValue={film.rate}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="subtitle1" color="text.Secondary">
                  {film.duration} | {film.nation}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
