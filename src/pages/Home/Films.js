import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
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
import { Link, useParams } from "react-router-dom";

const StyledCard = styled(Card)(({}) => ({
  backgroundColor: "#696969",
  color: "#f0f0f0",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  position: "relative",
}));

const CustomCardMedia = styled(CardMedia)(({}) => ({
  width: "100%", // Kích thước chiều rộng mới
  height: "400px", // Kích thước chiều cao mới
  objectFit: "cover", // Kiểu căn chỉnh ảnh
}));

const TitleTypography = styled(Typography)(({}) => ({
  fontSize: "1.25rem",
  color: "white",
}));

const Overlay = styled("div")(({}) => ({
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

const DetailButton = styled(Button)(({}) => ({
  color: "#f0f0f0",
  padding: "8px 20px",
  border: "none",
  cursor: "pointer",
}));

export default function Films() {
  const [films, setFilms] = useState([]);
  const baseURL = `https://64933779428c3d2035d18178.mockapi.io/films`;
  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {films.map((data) => (
          <Grid item xs={12} sm={6} md={3} key={data.id}>
            <StyledCard>
              <CustomCardMedia
                component="img"
                image={data.image}
                alt="Image Alt Text"
              />
              <Overlay>
                <DetailButton component={Link} to={`detail/${data.id}`}>
                  <PlayArrow sx={{ fontSize: 80 }} />
                </DetailButton>
              </Overlay>
              <CardContent>
                <TitleTypography gutterBottom variant="h5" component="div">
                  {data.title}
                </TitleTypography>
                <Rating
                  name="half-rating-read"
                  defaultValue={data.rate}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="subtitle1" color="text.Secondary">
                  {data.duration} | {data.nation}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
