import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Rocket } from "lucide-react";
import type { ReactElement } from "react";

export const ServiceCard: React.FC<{
  title: string;
  image: ReactElement;
  desc: string;
}> = ({ title, image, desc }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: 'background.paper',
        width: "100%",
        height: "100%",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ alignItems: "start" }}>
        <Box
          sx={{
            width: "fit-content",
            position: "relative",
            overflow: "hidden",
            p: 1.5,
            borderRadius: 2,
            mb: 1.5,
            ":before": {
              bgcolor: "info.light",
              content: '""',
              inset: 0,
              position: "absolute",
              opacity: 0.1,
            },
          }}
        >
          {image}
        </Box>
        <Box sx={{}}>
          <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, lineHeight: 2 }}>
            {desc}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
