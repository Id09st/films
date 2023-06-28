import {
  Alert,
  Button,
  AlertTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Add.css";

export default function Add() {
  const baseUrl = "https://64933779428c3d2035d18178.mockapi.io/films";
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      duration: "",
      nation: "",
      youtube: "",
      info: "",
      image: "",
    },
    onSubmit: (values) => {
      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
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
  });
  return (
    <Container>
      <h4 className="mb-5 text-left uppercase">Add a new films</h4>
      <form
        onSubmit={formik.handleSubmit}
        className="form-add border border-solid p-6 shadow-md bg-white"
      >
        <TextField
          autoFocus
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="title"
          label="title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && (
          <Typography variant="caption" color="red">
            {formik.errors.title}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="duration"
          label="duration"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.duration}
          onChange={formik.handleChange}
        />
        {formik.errors.duration && (
          <Typography variant="caption" color="red">
            {formik.errors.duration}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="image"
          label="URL of image"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
        {formik.errors.image && (
          <Typography variant="caption" color="red">
            {formik.errors.image}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="rate"
          label="Rate"
          type="number"
          fullWidth
          variant="standard"
          value={formik.values.rate}
          onChange={formik.handleChange}
        />
        {formik.errors.rate && (
          <Typography variant="caption" color="red">
            {formik.errors.rate}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="year"
          label="year"
          type="number"
          fullWidth
          variant="standard"
          value={formik.values.year}
          onChange={formik.handleChange}
        />
        {formik.errors.year && (
          <Typography variant="caption" color="red">
            {formik.errors.year}
          </Typography>
        )}
        <TextField
          autoFocus
          name="nation"
          label="Nation"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.nation}
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.nation && (
          <Typography variant="caption" color="red">
            {formik.errors.nation}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="youtube"
          label="Intro video"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.youtube}
          onChange={formik.handleChange}
        />
        {formik.errors.youtube && (
          <Typography variant="caption" color="red">
            {formik.errors.youtube}
          </Typography>
        )}
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
        />
        {formik.errors.info && (
          <Typography variant="caption" color="red" display="block">
            {formik.errors.info}
          </Typography>
        )}
        <Button className="m-4" variant="contained" size="small" type="submit">
          Add
        </Button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>Adding successful!</AlertTitle>
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
            <Link
              to="/dashboard"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
