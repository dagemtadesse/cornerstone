import { Gavel, HeartHandshake, Rocket, ServerCrash } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import Grid from "@mui/material/Grid";

export default function AdvisoryServicesSection() {
  const services = [
    {
      title: "Market Entry & Expansion",
      image: <Rocket />,
      description:
        "We help companies successfully launch and scale across Africa’s most complex and high-growth markets. Services include market entry strategy and execution, regulatory and licensing navigation, partner identification with banks, telcos, regulators, and platforms, as well as go-to-market planning.",
    },
    {
      title: "Regulatory & Compliance Advisory",
      image: <Gavel />,
      description:
        "We ensure your operations are compliant, secure, and built for long-term sustainability. Our expertise includes licensing and regulatory approvals, AML/CFT and KYC frameworks, PCI-DSS compliance, risk management and governance, and cross-border compliance strategy.",
    },
    {
      title: "Strategic Partnerships & Deal Facilitation",
      image:<HeartHandshake />,
      description:
        "We don’t just advise—we open doors and help close deals. We support strategic partnership development, telecom, banking, and fintech alliances, deal structuring and negotiation support, as well as stakeholder engagement and ecosystem building.",
    },
    {
      title: "Digital Value Ecosystems",
      image: <ServerCrash />,
      description:
        "We help companies tap into Africa’s fast-growing digital value exchange economy. Our services include gift card business model design and expansion, airtime and voucher ecosystem integration, liquidity sourcing and FX strategy, fraud prevention and risk mitigation, and cross-border digital value exchange systems.",
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {services.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.title}>
            <ServiceCard
              title={item.title}
              desc={item.description}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
