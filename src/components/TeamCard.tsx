import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const TeamCard: React.FC<{
  image: string;
  name: string;
  description: string;
}> = ({ image, name, description }) => {
  return (
    <>
      <Card sx={{ height: "100%", borderRadius: 4 }} variant="outlined">
        <CardMedia image={image} title={name} sx={{ aspectRatio: "1" }} />
        <CardContent>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            {name}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
