"use client";

import Image from "next/image";
import Link from "next/link";
import loge from "../../public/logo.jpg";

import { Box, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import Alert from "@mui/material/Alert";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const router = useRouter()
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
      setSeverity("success");
      setMessage(data.message || "Compte créé avec succès.");
      setNewUser({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        router.push("/login")
      }, 2000);
    } catch (error) {

      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
      console.log(error.response?.data);
      
      if (error.response?.status === 400) {
        const fieldErrors = error.response?.data.error.fieldErrors;
        console.log("fieldErrors", fieldErrors);

        setErrors(fieldErrors);
        setSeverity("error");
        setMessage(
          fieldErrors.fullname?.[0] ||
            fieldErrors.email?.[0] ||
            fieldErrors.password?.[0] ||
            fieldErrors.confirmPassword?.[0],
        );
      } else {
        setSeverity("error");
        setMessage("Erreur serveur.");
      }

      setTimeout(() => {
        setMessage("");
      }, 3000);
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
              {message && (
                <Alert severity={severity} sx={{ mb: 2 }}>
                  {message}
                </Alert>
              )}
            </Box>
            <TextField
              name="fullname"
              fullWidth
              label="Full Name"
              margin="normal"
              onChange={handleChange}
              error={!!errors.fullname}
              helperText={errors.fullname?.[0]}
            />
            <TextField
              name="email"
              fullWidth
              label="Email"
              margin="normal"
              value={newUser.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email?.[0]}
            />
            <TextField
              name="password"
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              value={newUser.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password?.[0]}
            />
            <TextField
              name="confirmPassword"
              fullWidth
              type="password"
              label="Confirm Password"
              margin="normal"
              value={newUser.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.[0]}
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
