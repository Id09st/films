import React, { useState } from "react";
import { useParams } from "react-router-dom";
import films from "../../List/ListOfFilms";
import ModalCase from "./ModalCase";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Rating,
} from "@mui/material";
import { styled } from "@mui/system";
import { YouTube } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: "#f0f0f0",
  borderRadius: theme.spacing(2),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "185px",
  height: "278px",
  borderRadius: theme.spacing(2),
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
}));

export default function Detail() {
  const { id } = useParams();
  const film = films.find((obj) => obj.id == id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <StyledCard>
        <StyledCardMedia component="img" src={`../${film.image}`} alt="" />
        <StyledCardContent>
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
          <Typography variant="body1" color="textSecondary">
            {film.name} - {film.info}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
}
