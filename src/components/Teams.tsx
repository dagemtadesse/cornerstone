import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TeamCard } from "./TeamCard";

const AdvisoryLeaders = () => {
  const etTeam = [
    {
      name: "Abebe Assefa",
      description:
        "CEO & Co-Founder | 15+ years of fintech leadership experience",
      image: "professional-headshot.jpg", // Replace with actual image
    },
    {
      name: "Tekle Mengesha",
      description:
        "Technology Advisor | 16+ years leading project  management and research & development initiatives",
      image: "professional-headshot.jpg",
    },
    {
      name: "Abraham Degefa",
      description:
        "Regulatory & Compliance Counsel | 7+ years experience in fintech counseling",
      image: "professional-headshot.jpg",
    },
    {
      name: "Fredi Merhatsidk",
      description:
        "Research & Strategy Lead | 20+ experience in leadership , research and strategy",
      image: "professional-headshot.jpg",
    },
  ];

  const remoteTeam = [
    {
      name: "Baba GUEYE (SN)",
      description:
        "15+years of experience in FIntech VP of Growth at Interswitch",
      image: "professional-headshot.jpg", // Replace with actual image
    },
    {
      name: "Youssef El Madaani (MA)",
      description: "15+years of experience in FIntech and telecom BDM at Nokia",
      image: "professional-headshot.jpg",
    },
    {
      name: "Ahmed Marwan (EG)",
      description: "12+years of experience in FIntech Head of Mena at On Afriq",
      image: "professional-headshot.jpg",
    },
    {
      name: "Quinton Maronga (CD)",
      description:
        "7+years of experience in FIntech Head of Operations CTG-Texaf Digital",
      image: "professional-headshot.jpg",
    },
    {
      name: "Issiaga Dialo (CI)",
      description: "15+years of experience in FIntech and telecom",
      image: "professional-headshot.jpg",
    },
    {
      name: "Victor Ibizugbe(NG)",
      description: "7+ years driving operational excellence in fintech",
      image: "professional-headshot.jpg",
    },
  ];

  return (
    <Box sx={{ py: 8 }} id="teams">
      <Container>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          Connect with our Advisory teams
        </Typography>
        <Grid container spacing={1.5} sx={{justifyContent: 'center'}}>
          {etTeam.map((leader) => (
            <Grid key={leader.name} size={{ xs: 6, md: 4, lg: 3 }}>
              <TeamCard
                image={leader.image}
                name={leader.name}
                description={leader.description}
              />
            </Grid>
          ))}

          <Grid size={12}>
            <Typography variant="h5" sx={{ fontWeight: "medium", my: 2 }}>
              Remote Advisory Team
            </Typography>
          </Grid>

          {remoteTeam.map((leader,) => (
            <Grid key={leader.name} size={{ xs: 6, md: 4, lg: 3 }}>
              <TeamCard
                image={leader.image}
                name={leader.name}
                description={leader.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvisoryLeaders;
