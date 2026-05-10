import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

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
          component={motion.div}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          position="relative"
          sx={{
            boxShadow: "none",
            borderBottomColor: "grey.300",
            borderBottomWidth: 1,
            bgcolor: "background.paper", // Ensure background is solid for premium feel
          }}
        >
          <Container>
            <Toolbar sx={{ py: 1, justifyContent: "space-between" }}>
              <Link to="/">
                <Stack direction={"row"} sx={{alignItems: 'center'}}>
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
                    color="info"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                  >
                    Cornerstone Advisory
                  </Typography>
                </Stack>
              </Link>

              <ButtonGroup variant="text" color="secondary">
                {contents.map((content) => (
                  <motion.div
                    key={content.to}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      LinkComponent={"a"}
                      sx={{
                        px: 3,
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "secondary.main", // Subtle color transition on hover
                          bgcolor: "transparent",
                        },
                      }}
                      href={content.to}
                      color="info"
                    >
                      <Typography variant="body2">{content.label}</Typography>
                    </Button>
                  </motion.div>
                ))}
              </ButtonGroup>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
