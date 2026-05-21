import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const activeStyle = {
  borderBottomColor: "secondary.main",
  color: "secondary.main",
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const contents = [
    { to: "/about-us", label: "About Us" },
    { to: "/", hash: "services", label: "Our services" },
    { to: "/teams", label: "Our leaders" },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

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
            bgcolor: "background.paper",
          }}
        >
          <Container>
            <Toolbar sx={{ py: 1, justifyContent: "space-between" }}>
              <Link to="/">
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    sx={{ mr: 2, img: { height: 40 } }}
                  >
                    <img src="/corenerstone-logo.png" alt="Cornerstone logo" height="40px" />
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

              <ButtonGroup
                variant="text"
                color="secondary"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {contents.map((content) => (
                  <motion.div
                    key={content.to + (content.hash ?? "")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={content.to}
                      hash={content.hash}
                      activeProps={{ className: "active-nav-link" }}
                      activeOptions={{ exact: true }}
                    >
                      {({ isActive }) => (
                        <Button
                          sx={{
                            px: 3,
                            transition: "color 0.3s ease, border-color 0.3s ease",
                            color: isActive ? "secondary.main" : "info.main",
                            bgcolor: "transparent",
                            "&:hover": {
                              color: "secondary.main",
                              bgcolor: "transparent",
                            },
                          }}
                        >
                          <Typography variant="body2">{content.label}</Typography>
                        </Button>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </ButtonGroup>

              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open navigation"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <Menu size={24} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 240 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {contents.map((content) => (
                <Link
                  key={content.to + (content.hash ?? "")}
                  to={content.to}
                  hash={content.hash}
                >
                  {({ isActive }) => (
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={isActive}
                        sx={{ color: isActive ? "secondary.main" : "text.primary" }}
                      >
                        <ListItemText primary={content.label} />
                      </ListItemButton>
                    </ListItem>
                  )}
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}