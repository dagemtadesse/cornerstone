import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box component={"footer"} sx={{ bgcolor: "#0C0D0D" }}>
      <Container sx={{ py: 4 }}>
        <Typography
          variant="body2"
          component={"div"}
          sx={{ textAlign: "center" }}
          color="primary"
        >
          © 2026 Grant Thornton Advisors LLC. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
