"use client";

import Image from "next/image";
import Link from "next/link";
import loge from "../../public/logo.jpg";

import { Box, Grid, Paper, TextField, Typography, Button } from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("/api/register", newUser);
      alert(data.message);
      setNewUser({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      alert("Erreur lors de l'ajout du utilisateur");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          mt: 4,
          width: "100%",
          maxWidth: 900,
          bgcolor: "#fff",
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* LEFT */}
        <Grid size={{ xs: 0, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={loge}
              alt="Warehouse"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 500,
              bgcolor: "#EDF6FC",
              border: "3px solid #2196F3",
              borderRadius: 6,
              p: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Inventory2OutlinedIcon
                sx={{
                  fontSize: 60,
                }}
              />

              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Warehouse
                <Box
                  component="span"
                  sx={{
                    color: "#1565C0",
                  }}
                >
                  OS
                </Box>
              </Typography>
            </Box>
            <TextField
              name="fullname"
              fullWidth
              label="Full Name"
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              name="email"
              fullWidth
              label="Email"
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              name="password"
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              name="confirmPassword"
              fullWidth
              type="password"
              label="Confirm Password"
              margin="normal"
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                py: 1.5,
                borderRadius: 5,
                textTransform: "none",
                fontSize: 16,
              }}
              onClick={handleSubmit}
            >
              Create Account
            </Button>

            <Typography
              align="center"
              sx={{
                mt: 3,
              }}
            >
              Login or <Link href="/login">Login</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
