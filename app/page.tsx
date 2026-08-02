"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import hero from "../public/hero.png";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{ spacing: 6, alignItems: "center" }}
          direction={{ xs: "column", md: "row" }}
        >
          {/* LEFT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "2.3rem",
                  md: "4rem",
                },
                variant: "h2",
                fontWeight: "bold",
              }}
            >
              Gérez votre entrepôt
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "2.3rem",
                  md: "4rem",
                },
                variant: "h2",
                color: "primary",
                fontWeight: "bold",
              }}
            >
              en toute simplicité
            </Typography>

            <Typography sx={{ maxWidth: 500, color: "text.secondary", mt: 3 }}>
              WarehouseOS vous aide à gérer vos produits, stocks et mouvements
              d'inventaire efficacement.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mt: 5,
              }}
            >
              <Button
                component={Link}
                href="/login"
                variant="contained"
                size="large"
                sx={{ bgcolor: "#4733c0" }}
              >
                Se connecter
              </Button>

              <Button
                component={Link}
                href="/register"
                variant="outlined"
                size="large"
                sx={{ color: "#4733c0" ,borderColor :"#4733c0"}}
              >
                Créer un compte
              </Button>
            </Stack>

            <Typography sx={{ mt: 3, color: "text.secondary" }}>
              Sécurisé • Fiable • Rapide
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={4}
              sx={{
                p: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 350,
                  overflow: "hidden",
                  borderRadius: 4,
                }}
              >
                <Image
                  src={hero}
                  alt="Warehouse"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Paper
                elevation={3}
                sx={{
                  width: 250,
                  p: 3,
                  mt: -6,
                  ml: "auto",
                  borderRadius: 3,
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Résumé de l'entrepôt
                </Typography>

                <Stack  direction = "row" spacing= {1.5} sx={{ alignItems:"center", mt:2}}>
                  <Inventory2OutlinedIcon sx={{color :"#4733c0"}}/>
                  <Typography>Produits : 128</Typography>
                </Stack>

                <Stack direction = "row" spacing= {1.5} sx={{  alignItems:"center"}}>
                   <CategoryOutlinedIcon sx={{color :"#4733c0"}}/>
                  <Typography>Catégories : 18</Typography>
                </Stack>

                <Stack direction = "row" spacing= {1.5} sx={{  alignItems:"center"}}>
                   <WarehouseOutlinedIcon sx={{color :"#4733c0"}}/>
                  <Typography>Stock : 2450</Typography>
                </Stack>

                <Stack direction = "row" spacing= {1.5} sx={{  alignItems:"center"}}>
                   <BarChartOutlinedIcon sx={{color :"#4733c0"}}/>
                  <Typography>Mouvements : 356</Typography>
                </Stack>
              </Paper>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
