import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import { FadeIn } from "./MotionWrappers";
import { motion } from "framer-motion";

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

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <Paper sx={{ boxShadow: "none", py: 4, overflow: "hidden" }}>
      <Container>
        <FadeIn>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              fontWeight: "bold",
              color: "text.secondary",
              textAlign: "center",
              letterSpacing: 1.15,
            }}
          >
            TRUSTED BY LEADING COMPANIES
          </Typography>
        </FadeIn>
      </Container>

      {/* Marquee Container */}
      <Box sx={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex", width: "100%" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust speed as needed
          }}
          style={{ display: "flex", gap: "32px", paddingRight: "32px", width: "max-content" }}
        >
          {duplicatedCompanies.map((com, index) => (
            <Box key={`${com}-${index}`} sx={{ px: 3, py: 1 }}>
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
        </motion.div>
      </Box>
    </Paper>
  );
};

export default Companies;
