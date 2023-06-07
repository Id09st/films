import React from "react";
import {
  Dialog,
  DialogContent,
  Container,
  IconButton,
  styled,
  Typography,
  DialogTitle,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "90%",
    maxWidth: "752px",
  },
  "& .MuiDialogTitle-root": {
    padding: "16px",
  },
  "& .MuiDialogContent-root": {
    padding: "16px",
  },
  "& .MuiDialogActions-root": {
    padding: "8px",
  },
  "& .closeButton": {
    position: "absolute",
    top: "8px",
    right: "8px",
    zIndex: "1",
    backgroundColor: theme.palette.background.default,
    borderRadius: "50%",
    padding: "4px",
  },
  "& .closeButton:hover": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ModalCase({ setIsOpen, film }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <StyledDialog open={true} onClose={handleClose}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          className="closeButton"
          aria-label="close"
        >
          <CloseOutlined />
        </IconButton>
        <DialogContent>
          <iframe
            width="100%"
            height="400px"
            src={film.youtube}
            title={film.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <Typography variant="h5">
              {film.title} ({film.year})
            </Typography>
            <Typography variant="subtitle1">
              {film.name} - {film.info}
            </Typography>
          </div>
        </DialogContent>
      </StyledDialog>
    </Container>
  );
}
