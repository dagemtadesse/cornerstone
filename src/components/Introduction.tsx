import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Introduction = () => {
  return (
    <Box
      id="intro"
      className="relative w-full py-20  bg-gradient-to-r from-[#F7F6F4] to-[#D6D1CA] "
    >
      <Container>
        {/* Text Content */}
        <Stack direction={"column"} sx={{ gap: 2 }}>
         <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
            Cornerstone Advisory
          </Typography>

          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            Our vision is to be the leading enabler of market entry and scalable
            digital growth across Africa, offering core services in strategic
            partnerships, deal facilitation, and regulatory advisory. We combine
            deep local insight with global expertise to deliver actionable
            strategies and digital ecosystems that unlock high-value
            opportunities for our clients.
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            Driven by a team of over 10 legal, tech, and sales experts with vast
            networks across East, West, and North Africa, we have established a
            strong track record of success. Since January, we have helped
            companies like Lira, 54Pay, Nala, and PrepayNation expand their
            reach and close pivotal deals, bridging the gap between strategy and
            execution.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Introduction;
