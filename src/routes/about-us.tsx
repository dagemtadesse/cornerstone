import Companies from "#/components/Companies";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us")({ component: App });

function App() {
  return (
    <>
      <Box
        sx={{
          background: "url(afric-white.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
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
              color="info"
              component={"h1"}
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: "bold",
                maxWidth: "sm",
              }}
            >
              Navigating & Accelerating Market Entry Across Africa
            </Typography>

            <Typography
              variant="body1"
              component={"p"}
              color="info"
              sx={{ maxWidth: 680 }}
            >
              Cornerstone Advisory is a pan-African advisory firm headquartered
              in Ethiopia, helping businesses expand and scale across Africa’s
              fast-growing markets. We specialize in market entry, strategic
              partnerships, regulatory advisory, and digital value ecosystems,
              combining deep local insight with global expertise to unlock
              growth opportunities across East, West, and North Africa. &npbsp;
            </Typography>
            <Typography
              variant="body1"
              component={"p"}
              color="info"
              sx={{ maxWidth: 680, mt: 2 }}
            >
              Our team of fintech leaders, legal advisors, and technology
              experts brings decades of experience in payments, telecom,
              compliance, and digital commerce. We have supported companies such
              as Lira, 54Pay, Axepay, Nala, FutureX, and PrepayNation in
              building partnerships, navigating regulations, and driving
              sustainable growth across the continent.
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
    </>
  );
}
