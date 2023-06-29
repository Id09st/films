// Trong Dashboard.js
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import ModalEdit from "./ModalEdit";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Dashboard() {
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
              <StyledTableCell align="left">{film.duration}</StyledTableCell>
              <StyledTableCell align="left">{film.year}</StyledTableCell>
              <StyledTableCell align="left">{film.nation}</StyledTableCell>
              <StyledTableCell align="left">
                <Button onClick={() => handleOpenEdit(film.id)} color="inherit">
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
  );
}

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
