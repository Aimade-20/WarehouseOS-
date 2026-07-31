"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Button,
  Box,
  Container,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Header() {
  const { data } = useSession();
  console.log(data);
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            // height: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left */}
          <Typography variant="h6" sx={{ color: "black", fontWeight: 700 }}>
            Warehouse
            <Box
              component="span"
              sx={{
                color: "#0e5ef3",
              }}
            >
              OS
            </Box>
          </Typography>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              placeholder="Search"
              size="small"
              sx={{
                width: 280,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  bgcolor: "#FAFAFA",
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar src="/avatar.jpg" />

              <Box>
                <Typography
                  sx={{ color: "black", fontSize: 14, fontWeight: 600 }}
                >
                  {data?.user?.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "black" }}
                >
                  {data?.user?.email}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              sx={{
                textTransform: "none",
                borderRadius: 2,
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
