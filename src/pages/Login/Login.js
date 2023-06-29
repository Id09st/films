import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <Container maxWidth="sm" style={{ padding: "20px" }}>
      <GoogleButton onClick={handleGoogleSignIn} />
    </Container>
  );
}
