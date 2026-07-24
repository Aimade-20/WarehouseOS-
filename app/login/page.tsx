"use client";

import Image from "next/image";
import Link from "next/link";
import loge from "../../public/yl-lLIF258nEE_risbwdgQLIASQUwJcHh1Z66ohDCCk6NAZkPIL737DmNS2N_erZbEmz0IezLPbmSaKIOSovkmAuSHOdbsn3rCuX_TA5KT4MRtrtyUXg6GOWAfGb2_LW8fGNF8Lgj_X-jLs7wE1lPKEyMApCB7ZQ35_ocH1f1TSJtJgVsItzuUBvuW9vAYEj.jpg";

import { Box, Grid, Paper, TextField, Typography, Button } from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = async () => {
    const result = await signIn("credentials", {
      email: email.trim().toLowerCase(),
      password,
      redirect: false,
    });
    console.log(result);
    if (result?.error) {
      console.log("Email ou mot de passe incorrect");
      return;
    }
    router.push("/dashbord");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // p: 3,
      }}
    >
      <Grid
        container
        sx={{
          mt: 4,
          width: "100%",
          maxWidth: 900,
          //   height: "90vh",

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

        {/* RIGHT */}
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
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Welcome Back
              </Typography>
            </Box>
            <TextField
              name="email"
              value={email}
              fullWidth
              label="Email"
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              value={password}
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleChange}
            >
              Log In
            </Button>

            <Typography
              align="center"
              sx={{
                mt: 3,
              }}
            >
              Login or <Link href="/register">Create Account</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
