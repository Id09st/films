import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import * as Yup from "yup";

export default function ModalEdit({ setIsEditOpen, films, selectedFilmId }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setIsEditOpen(false);
    setOpen(false);
  };

  const film = films && films.find((item) => item.id === selectedFilmId);

  const formik = useFormik({
    initialValues: {
      name: film ? film.name : "",
      title: film ? film.title : "",
      duration: film ? film.duration : "",
      rate: film ? film.rate : "",
      year: film ? film.year : "",
      nation: film ? film.nation : "",
      youtube: film ? film.youtube : "",
      info: film ? film.info : "",
      image: film ? film.image : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      title: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      duration: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      nation: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      info: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      youtube: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      image: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
    }),
    onSubmit: (values) => {
      console.log("value", values);
      fetch(`https://64933779428c3d2035d18178.mockapi.io/films/${film.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          console.log(response, "asdas");
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
    },
  });

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Update Film</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            autoFocus
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            margin="dense"
            name="duration"
            label="Duration"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.duration}
            onChange={formik.handleChange}
            error={
              formik.touched.duration && formik.errors.duration ? true : false
            }
            helperText={formik.touched.duration && formik.errors.duration}
          />
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && formik.errors.title ? true : false}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            margin="dense"
            name="image"
            label="URL of image"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.image}
            onChange={formik.handleChange}
            error={formik.touched.image && formik.errors.image ? true : false}
            helperText={formik.touched.image && formik.errors.image}
          />
          <TextField
            margin="dense"
            name="rate"
            label="Rate"
            type="number"
            fullWidth
            variant="standard"
            value={formik.values.rate}
            onChange={formik.handleChange}
            error={formik.touched.rate && formik.errors.rate ? true : false}
            helperText={formik.touched.rate && formik.errors.rate}
          />
          <TextField
            margin="dense"
            name="year"
            label="Year"
            type="number"
            fullWidth
            variant="standard"
            value={formik.values.year}
            onChange={formik.handleChange}
            error={formik.touched.year && formik.errors.year ? true : false}
            helperText={formik.touched.year && formik.errors.year}
          />
          <TextField
            margin="dense"
            name="youtube"
            label="Intro youtube"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.youtube}
            onChange={formik.handleChange}
            error={
              formik.touched.youtube && formik.errors.youtube ? true : false
            }
            helperText={formik.touched.youtube && formik.errors.youtube}
          />
          <TextField
            multiline
            rows={2}
            margin="dense"
            name="info"
            label="Information"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.info}
            onChange={formik.handleChange}
            error={formik.touched.info && formik.errors.info ? true : false}
            helperText={formik.touched.info && formik.errors.info}
          />
        </form>
        {open && (
          <Alert severity="success" onClose={() => setOpen(false)}>
            <AlertTitle>Success</AlertTitle>
            Film has been updated successfully!
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={formik.handleSubmit} color="success">
          Save
        </Button>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
