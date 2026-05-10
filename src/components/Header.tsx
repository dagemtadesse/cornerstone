import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function Header() {
  const contents = [
    { to: "/about-us", label: "About Us" },
    { to: "/#services", label: "Our services" },
    { to: "/teams", label: "Our leaders" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          sx={{
            boxShadow: "none",
            borderBottomColor: "grey.300",
            borderBottomWidth: 1,
          }}
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
    </>
  );
}
