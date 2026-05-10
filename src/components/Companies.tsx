import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

const Companies: React.FC = () => {
  const companies = [
    "Lira",
    "54Pay",
    "Axepay",
    "Nala",
    "CSQ Non Stop",
    "FutureX",
    "PrepayNation",
    "GifteyPro",
    "AioSystems",
  ];

  return (
    <Paper sx={{ boxShadow: "none", py: 4 }}>
      <Container>
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "text.secondary",
            textAlign: "center",
            letterSpacing: 1.15,
          }}
        >
          TRUSTED BY LEADING COMPANIES
        </Typography>

        <Stack direction={"row"} sx={{ justifyContent: "center", gap: 4 }}>
          {companies.map((com) => (
            <Box sx={{ px: 3, py: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "text.secondary",
                  whiteSpace: "nowrap",
                }}
              >
                {com}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Paper>
  );
};

export default Companies;
