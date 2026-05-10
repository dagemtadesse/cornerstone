import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ContactForm from "./ContactForm";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box component={"footer"} sx={{ bgcolor: "info.main" }}>
      <ContactForm />

      <Divider />

      <Container sx={{ py: 4 }}>
        <Typography
          variant="body2"
          component={"div"}
          sx={{ textAlign: "center" }}
          color="primary"
        >
          © 2026 Corner Stone Advisors LLC. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
