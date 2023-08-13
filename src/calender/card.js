import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ i, doFun, src, events, location }) {
  return (
    <Card disabled onClick={() => doFun(i)} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="80" image={src} alt="img" />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            component="div"
          >
            {location}
          </Typography>
          <Typography variant="h5" color="red">
            {i + 1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {events}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
