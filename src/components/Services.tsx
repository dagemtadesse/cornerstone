import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ServiceCard } from "./ServiceCard";
import Grid from "@mui/material/Grid";

export default function AdvisoryServicesSection() {
  const services = [
    {
      title: "Market Entry & Expansion",
      image: "market-expansion.jpg",
      desc: "We help companies successfully launch and scale across Africa’s most complex and high-growth markets.",
      items: [
        "Market entry strategy and execution",
        "Regulatory and licensing navigation",
        "Partner identification (banks, telcos, regulators, platforms)",
        "Go-to-market planning",
      ],
    },
    {
      title: "Regulatory & Compliance Advisory",
      image: "compliance.jpg",
      desc: "We ensure your operations are compliant, secure, and built for long-term sustainability.",
      items: [
        "Licensing and regulatory approvals",
        "AML/CFT and KYC frameworks",
        "PCI-DSS compliance",
        "Risk management and governance",
        "Cross-border compliance strategy",
      ],
    },
    {
      title: "Strategic Partnerships & Deal Facilitation",
      image: "deal.jpg",
      desc: "We don’t just advise—we open doors and help close deals.",
      items: [
        "Strategic partnership development",
        "Telecom, banking, and fintech alliances",
        "Deal structuring and negotiation support",
        "Stakeholder engagement and ecosystem building",
      ],
    },
    {
      title: "Digital Value Ecosystems ",
      image: "digital-vale.jpg",
      desc: "We help companies tap into Africa’s fast-growing digital value exchangeeconomy.",
      items: [
        "Gift card business model design and expansion",
        "Airtime and voucher ecosystem integration",
        "Liquidity sourcing and FX strategy",
        "Fraud prevention and risk mitigation",
        "Cross-border digital value exchange systems",
      ],
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        background:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        backgroundAttachment: "fixed",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0, 0.9), rgba(0, 0, 0, 0.6))",
        },
      }}
    >
      {/* Content */}
      <Container sx={{ py: 8, position: "relative" }}>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold" }}
          color="primary"
        >
          How can we help you?
        </Typography>

        <Typography
          variant="body2"
          sx={{ maxWidth: 680, mb: 6 }}
          color="primary"
        >
          Our advisory teams tackle challenges alongside you, designing fresh
          solutions with a balance of scale, skill and service you’ll only find
          here.
        </Typography>

        <Grid container spacing={1.5}>
          {services.map((item) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={item.title}>
              <ServiceCard
                title={item.title}
                desc={item.desc}
                items={item.items}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
