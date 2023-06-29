import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { AddCircleOutline, Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ModalEdit from "./ModalEdit";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "20px",
}));

const isMobile = useMediaQuery("(max-width: 601px)");

const Dashboard = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [deleteFilmId, setDeleteFilmId] = useState(null);
  const [films, setFilms] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  useEffect(() => {
    fetch("https://64933779428c3d2035d18178.mockapi.io/films")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleOpenEdit = (id) => {
    setSelectedFilmId(id);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  const handleOpenConfirmation = (id) => {
    setDeleteFilmId(id);
    setIsConfirmationOpen(true);
  };

  const handleDeleteFilm = () => {
    fetch(`https://64933779428c3d2035d18178.mockapi.io/films/${deleteFilmId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setIsConfirmationOpen(false);
        setFilms((prevFilms) =>
          prevFilms.filter((film) => film.id !== deleteFilmId)
        );
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      {isMobile ? (
        <Container>
          {films.map((film) => (
            <div key={film.image} style={{ marginBottom: "20px" }}>
              <Avatar alt={film.name} src={film.image} />
              <Typography variant="subtitle1">{film.name}</Typography>
              <Typography variant="body1">{film.title}</Typography>
              <Typography variant="body2">Duration: {film.duration}</Typography>
              <Typography variant="body2">Year: {film.year}</Typography>
              <Typography variant="body2">Nation: {film.nation}</Typography>
              <Button
                onClick={() => handleOpenEdit(film.id)}
                color="primary"
                startIcon={<Edit />}
              >
                Edit
              </Button>
              <Button
                onClick={() => handleOpenConfirmation(film.id)}
                color="secondary"
                startIcon={<Delete />}
              >
                Delete
              </Button>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="large"
              color="primary"
              component={Link}
              to="/add"
              startIcon={<AddCircleOutline />}
            >
              Add more
            </Button>
          </div>
          {isEditOpen && (
            <ModalEdit
              setIsEditOpen={setIsEditOpen}
              films={films}
              selectedFilmId={selectedFilmId}
            />
          )}

          <ConfirmationDialog
            isOpen={isConfirmationOpen}
            handleClose={() => setIsConfirmationOpen(false)}
            handleDelete={handleDeleteFilm}
          />
        </Container>
      ) : (
        <Container style={{ padding: "20px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Duration</StyledTableCell>
                <StyledTableCell align="left">Year</StyledTableCell>
                <StyledTableCell align="left">Nation</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {films.map((film) => (
                <StyledTableRow key={film.image}>
                  <StyledTableCell align="left">
                    <Avatar alt={film.name} src={film.image} />
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    component={Link}
                    to={`/detail/${film.id}`}
                  >
                    {film.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{film.title}</StyledTableCell>
                  <StyledTableCell align="left">
                    {film.duration}
                  </StyledTableCell>
                  <StyledTableCell align="left">{film.year}</StyledTableCell>
                  <StyledTableCell align="left">{film.nation}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      onClick={() => handleOpenEdit(film.id)}
                      color="inherit"
                    >
                      <Edit />
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      onClick={() => handleOpenConfirmation(film.id)}
                      color="inherit"
                    >
                      <Delete />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="large"
              color="inherit"
              component={Link}
              to="/add"
              startIcon={<AddCircleOutline />}
            >
              Add more
            </Button>
          </div>
          {isEditOpen && (
            <ModalEdit
              setIsEditOpen={setIsEditOpen}
              films={films}
              selectedFilmId={selectedFilmId}
            />
          )}

          <ConfirmationDialog
            isOpen={isConfirmationOpen}
            handleClose={() => setIsConfirmationOpen(false)}
            handleDelete={handleDeleteFilm}
          />
        </Container>
      )}
    </>
  );
};

function ConfirmationDialog({ isOpen, handleClose, handleDelete }) {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this film?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          No
        </Button>
        <Button onClick={handleDelete} color="success">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Dashboard;
