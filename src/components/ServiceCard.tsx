import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Circle } from "lucide-react";
import { useState } from "react";

export const ServiceCard: React.FC<{
  title: string;
  image: string;
  desc: string;
  items: string[];
}> = ({ title, image, desc, items }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        height: "fit-content",
        borderRadius: 2,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia sx={{ height: 180 }} image={image} title={title} />
      <CardContent>
        <Box sx={{ minHeight: 125, maxHeight: 125 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            {desc}
          </Typography>
        </Box>

        <Collapse orientation="vertical" in={hovered}>
          <List sx={{ gap: 1.5, pt: 2 }}>
            {items.map((service, index) => (
              <ListItem sx={{}} key={service + index}>
                <ListItemIcon>
                  <Circle size={16} className="shrink-0" />
                </ListItemIcon>
                <ListItemText
                  primary={service}
                  slotProps={{ primary: { variant: "body2" } }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
};
