import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AdvisoryServicesSection from "./Services";

const Introduction = () => {
  return (
    <Box id="intro" className="relative w-full py-20  ">
      <Container>
        {/* Text Content */}
        <Stack direction={"column"} sx={{ gap: 2, maxWidth: "md" }}>
          <Typography variant="h4" sx={{  fontWeight: "bold" }}>
            Our Core Expertise
          </Typography>

          <Typography variant="body2" sx={{ lineHeight: 2, mb: 4 }}>
            Cornerstone Advisory is a premier entry strategy firm focused on
            Africa. We bridge the gap between global capital and regional
            opportunities through three key pillars.
          </Typography>
        </Stack>

        <AdvisoryServicesSection />
      </Container>
    </Box>
  );
};

export default Introduction;
