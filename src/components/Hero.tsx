import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Companies from "./Companies";
import { Link } from "@tanstack/react-router";

export const Hero = () => {
  return (
    <>
      <header>
        <Box
          sx={{
            background: "url(hero.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.3))",
            },
          }}
        >
          <Container sx={{ position: "relative" }}>
            <Stack
              direction={"column"}
              sx={{
                py: 12,
                justifyContent: "center",
                minHeight: 420,
                position: "relative",
              }}
            >
              <Typography
                color="white"
                component={"h1"}
                variant="h3"
                sx={{
                  mb: 4,
                  fontWeight: "bold",
                  color: "white",
                  maxWidth: "sm",
                }}
              >
                Navigating & Accelerating Market Entry Across Africa
              </Typography>

              <Typography
                variant="body1"
                component={"p"}
                color="white"
                sx={{ maxWidth: 680, color: "white", fontWeight: 300 }}
              >
                Empowering global businesses to expand and thrive in Africa
                through strategic advisory, digital ecosystems, and regulatory
                expertise.
              </Typography>

              <Stack direction={"row"} sx={{ gap: 4, mt: 4 }}>
                <Link to="#contact-us">
                  <Button variant="contained" color="secondary" size="large">
                    Book a Strategy Call
                  </Button>
                </Link>
                {/* <Button variant="outlined" color="primary" size="large">
                  View Case Studies
                </Button> */}
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Companies />
      </header>
    </>
  );
};
