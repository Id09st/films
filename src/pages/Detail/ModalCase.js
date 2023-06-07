import React from "react";
import { Container } from "@mui/material";
export default function ModalCase({ setIsOpen, film }) {
  return (
    <Container>
      <div className="modal-show" onClick={() => setIsOpen(false)}>
        <div
          id="modal1"
          className="modal"
          style={{ display: "block", top: "35%" }}
        >
          <div className="modal-content">
            <h4>Video for {film.title} </h4>
            <p>
              <iframe
                width="100%"
                height="400px"
                src={film.youtube}
                title={film.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; entrypted-media; gyroscope; pictrue-in-pictrue"
                allowFullScreen
              />
            </p>
          </div>
          <div className="modal-footer">
            <a className="modal-close red-text">Close</a>
          </div>
        </div>
      </div>
    </Container>
  );
}
