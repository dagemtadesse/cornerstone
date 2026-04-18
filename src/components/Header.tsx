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
            <Toolbar sx={{ py: 1.5 }}>
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
                variant="body1"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "thin" }}
              >
                Cornerstone Advisory
              </Typography>

              <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
                <MapPin />
                <Typography variant="body2">Addis Ababa, Ethiopia</Typography>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <header>
        <Box
          sx={{
            background: "url(hero-background.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0, 0.75), rgba(0, 0, 0, 0.6))",
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
                sx={{ mb: 4, fontWeight: "bold", color: "white" }}
              >
                Cornerstone Advisory
              </Typography>

              <Typography
                variant="h6"
                component={"p"}
                color="white"
                sx={{ maxWidth: 680, color: "white", fontWeight: 300 }}
              >
                A pan-African company headquartered in Ethiopia, bringing
                together top professionals across East, West and North Africa
              </Typography>
            </Stack>
          </Container>
        </Box>

        {/* Bottom Navigation */}
        <Box sx={{ py: 1.5 }}>
          <Container>
            <ButtonGroup variant="text" color="secondary">
              {contents.map((content) => (
                <>
                  <Button
                    LinkComponent={"a"}
                    sx={{ px: 3 }}
                    href={content.to}
                    key={content.to}
                  >
                    <Typography variant="body2">{content.label}</Typography>
                  </Button>
                </>
              ))}
            </ButtonGroup>
          </Container>
        </Box>
      </header>
    </>
  );
}
