import { Gavel, HeartHandshake, Rocket, ServerCrash } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import Grid from "@mui/material/Grid";
import { StaggerContainer, StaggerItem } from "./MotionWrappers";

export default function AdvisoryServicesSection() {
  const services = [
    {
      title: "Market Entry & Expansion",
      image: <Rocket />,
      description:
        "We help businesses launch and scale across Africa through market strategy, regulatory guidance, partner connections, and go-to-market planning.",
    },
    {
      title: "Regulatory & Compliance Advisory",
      image: <Gavel />,
      description:
        "We support compliant and sustainable operations through licensing, AML/KYC frameworks, PCI-DSS compliance, and risk management.",
    },
    {
      title: "Strategic Partnerships & Deal Facilitation",
      image: <HeartHandshake />,
      description:
        "We connect businesses with key partners across telecom, banking, and fintech while supporting negotiations and ecosystem growth.",
    },
    {
      title: "Digital Value Ecosystems",
      image: <ServerCrash />,
      description:
        "We help companies grow in digital value exchange through gift cards, airtime systems, liquidity strategy, and fraud prevention.",
    },
  ];

  return (
    <>
      <StaggerContainer>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {services.map((item, index) => (
            <Grid size={{ xs: 12, md: 6,  }} key={item.title}>
              {/* sx={{ transform: { md: index % 2 == 1 ? 'translateY(3rem)' : 'none' } }} */}
              <StaggerItem>
                <ServiceCard
                  title={item.title}
                  desc={item.description}
                  image={item.image}
                />
              </StaggerItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </>
  );
}
