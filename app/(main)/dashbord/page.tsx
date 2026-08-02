"use client";

import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data } = useSession();
  console.log("data", data);

  return (
    <Box
      sx={{
        bgcolor: "#f8fafc",
        minHeight: "100vh",
        p: 4,
      }}
    >
      {/* Header */}
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box >
          <Typography color="text.secondary"  sx={{fontWeight: 700 }}>
            Bienvenue sur WarehouseOS 
            <Box
              component="span"
              sx={{
                ml: 1,
                color: "#4733c0",
              }}
            >
              {data?.user?.name}
            </Box>
          </Typography>
        </Box>
      </Stack>

      {/* Cards */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Stack
                sx={{
                  direction: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography color="text.secondary">Produits</Typography>

                  <Typography
                    sx={{
                      variant: "h4",
                      fontWeight: 700,
                    }}
                  >
                    128
                  </Typography>
                </Box>

                <Avatar sx={{ bgcolor: "#EEF2FF" }}>
                  <Inventory2OutlinedIcon color="primary" />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                sx={{
                  direction: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography color="text.secondary">Catégories</Typography>

                  <Typography
                    sx={{
                      variant: "h4",
                      fontWeight: 700,
                    }}
                  >
                    18
                  </Typography>
                </Box>

                <Avatar sx={{ bgcolor: "#EEF2FF" }}>
                  <CategoryOutlinedIcon color="primary" />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                sx={{
                  direction: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography color="text.secondary">Stock</Typography>

                  <Typography
                    sx={{
                      variant: "h4",
                      fontWeight: 700,
                    }}
                  >
                    2450
                  </Typography>
                </Box>

                <Avatar sx={{ bgcolor: "#EEF2FF" }}>
                  <WarehouseOutlinedIcon color="primary" />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                sx={{
                  direction: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography color="text.secondary">Mouvements</Typography>

                  <Typography
                    sx={{
                      variant: "h4",
                      fontWeight: 700,
                    }}
                  >
                    356
                  </Typography>
                </Box>

                <Avatar sx={{ bgcolor: "#EEF2FF" }}>
                  <SwapHorizOutlinedIcon color="primary" />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        spacing={3}
        sx={{
          mt: 2,
        }}
        container
      >
        <Grid size={{ xs: 12, lg: 8 }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{
                variant: "h6",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Derniers mouvements
            </Typography>

            <Divider />

            <Stack
              spacing={2}
              sx={{
                mt: 2,
              }}
            >
              <Paper variant="outlined" sx={{ p: 2 }}>
                +50 Clavier Logitech
              </Paper>

              <Paper variant="outlined" sx={{ p: 2 }}>
                -10 Souris HP
              </Paper>

              <Paper variant="outlined" sx={{ p: 2 }}>
                +20 Écran Dell
              </Paper>

              <Paper variant="outlined" sx={{ p: 2 }}>
                -5 Casque Logitech
              </Paper>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{
                variant: "h6",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Utilisateur connecté
            </Typography>

            <Divider />

            <Stack
              spacing={2}
              sx={{
                mt: 3,
              }}
            >
              <Typography>
                <strong>Nom :</strong> {data?.user?.name}
              </Typography>

              <Typography>
                <strong>Email :</strong> {data?.user?.email}
              </Typography>

              <Typography>
                <strong>Connexion :</strong> Aujourd'hui
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
