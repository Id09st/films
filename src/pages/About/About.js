import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import {
  LocationOn,
  Subtitles,
  ExpandMore,
  AccessTime,
  MovieCreation,
  StarRate,
  PlayCircle,
  Info,
} from "@mui/icons-material";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Container style={{ padding: "20px" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <Subtitles />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>NAME</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is the name of movie.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <LocationOn />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Nation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is the country of film production.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <AccessTime />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Duration
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The duration of a film, measured in minutes.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <MovieCreation />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Year</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Those five films were released.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <StarRate />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Rate</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Pre-release audience reviews for the film</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <Info />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Detailed information about the film.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
            sx={{
              "& .MuiAccordionSummary-content": {
                marginLeft: "16px", // Khoảng cách từ ExpandMore đến Typography
              },
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <PlayCircle />
            </div>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Traler</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Film trailer introduction.</Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
