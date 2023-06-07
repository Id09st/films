import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="#212121" py={4} textAlign="center">
        <Container>
          <Typography variant="body2" color="white">
            &copy; 2023 Your Website. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
