import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModalCase from "./ModalCase";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Rating,
  styled,
} from "@mui/material";
import { YouTube } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "185px",
  height: "278px",
  borderRadius: theme.spacing(2),
}));

const StyledCardTitle = styled(CardContent)(({}) => ({
  textAlign: "center",
}));

const StyledCardContent = styled(CardContent)(({}) => ({
  textAlign: "left",
}));

export default function Detail() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [film, setFilms] = useState([]);
  useEffect(() => {
    fetch(`https://64933779428c3d2035d18178.mockapi.io/films`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const film = data.find((obj) => obj.id == id);
        setFilms(film);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(film);

  return (
    <Container maxWidth="sm" style={{ padding: "20px" }}>
      <StyledCard>
        <StyledCardMedia component="img" src={film.image} alt="" />
        <StyledCardTitle>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            {film.title} ({film.year})
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={film.rate}
            precision={0.5}
            readOnly
          />
          {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
          <a onClick={() => setIsOpen(true)}>
            <YouTube sx={{ color: pink[500], fontSize: 25 }} />
          </a>
          <Typography variant="subtitle1" color="textPrimary">
            {film.duration} | {film.nation}
          </Typography>
        </StyledCardTitle>
        <StyledCardContent>
          <Typography variant="subtitle1" color="textSecondary">
            {film.name} - {film.info}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
}
