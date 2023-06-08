import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const images = [
  {
    url: "assets/images/b1.jpg",
    title: "Avatar",
    width: "30%",
    content:
      "Ten years ago, Avatar was a global sensation as it was recognized as the first film to be entirely produced and shot using 3D technology. Upon its release, Avatar 1 became a phenomenon that took the box office by storm, with audiences worldwide eagerly lining up at theaters just to witness the wondrous world of Pandora on the big screen.",
  },
  {
    url: "assets/images/b2.jpg",
    title: "Marvel Studios",
    width: "40%",
    content:
      "The Marvel Cinematic Universe (MCU) will officially enter its Phase 5 starting from 2023, promising to provide audiences with a deeper and more detailed look into the multiverse. To achieve this, Marvel Studios has already prepared a full lineup of blockbuster films and television shows, strategically positioned in both the film and television market.",
  },
  {
    url: "assets/images/b3.jpg",
    title: "DC Studios",
    width: "30%",
    content:
      "Film executives Walter Hamada and Chantal Nong, the President of DC Films and the Vice President of Production at DC, respectively, have announced their plans to expand the scope of the DC Universe on the big screen. With the temporary postponement of the Snyderverse, the DC Extended Universe (DCEU) will undergo a kind of reset in the coming years, with a focus on other DC films and the development of a multiverse. This signals a new direction for DC as they aim to explore various corners of their universe and offer fresh storytelling perspectives.",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function News() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => handleImageClick(image)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
        {selectedImage && (
          <div className="selected-image-container">
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.content}</p>
          </div>
        )}
      </Box>
    </Container>
  );
}
