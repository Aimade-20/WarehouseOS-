import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "#111827",
        color: "#fff",
        mt: 8,
      }}
    >
      <Typography>
        © {new Date().getFullYear()} WarehouseOS
      </Typography>
    </Box>
  );
}