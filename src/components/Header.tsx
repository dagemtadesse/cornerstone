import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { MapPin } from "lucide-react";

export default function Header() {
  const contents = [
    { to: "#intro", label: "About Us" },
    { to: "#services", label: "Our services" },
    { to: "#teams", label: "Our leaders" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          sx={{ bgColor: "white", boxShadow: "none" }}
        >
          <Container>
            <Toolbar sx={{ py: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, img: { height: 40 } }}
              >
                <img src="/corenerstone-logo.png" alt="" height="40px" />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                color="info"
                sx={{ flexGrow: 1, fontWeight: "thin" }}
              >
                Cornerstone Advisory
              </Typography>

              <ButtonGroup variant="text" color="secondary">
                {contents.map((content) => (
                  <>
                    <Button
                      LinkComponent={"a"}
                      sx={{ px: 3 }}
                      href={content.to}
                      key={content.to}
                      color="info"
                    >
                      <Typography variant="body2">{content.label}</Typography>
                    </Button>
                  </>
                ))}
              </ButtonGroup>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

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
                variant="h2"
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
                variant="h6"
                component={"p"}
                color="white"
                sx={{ maxWidth: 680, color: "white", fontWeight: 300 }}
              >
                Empowering global businesses to expand and thrive in Africa
                through strategic advisory, digital ecosystems, and regulatory
                expertise.
              </Typography>

              <Stack direction={"row"} sx={{ gap: 4, mt: 4 }}>
                <Button variant="contained" color="secondary" size="large">
                  Book a Strategy Call
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  View Case Studies
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Bottom Navigation */}
      </header>
    </>
  );
}
