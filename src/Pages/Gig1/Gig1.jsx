import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Gig1 = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Gig Detils</span>
        </div>

        <Card sx={{ maxWidth: 1200 }}>
          <CardMedia
            component="img"
            height="500"
            image="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Kandy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dasun{" "}
              <img
                style={{ width: 200, height: 30 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/2560px-5_stars.svg.png"
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              👀This gig is specially designed for professional 📷Photographer,
              videographers & Drone service providers who want to present their
              portfolios more beautifully and would like to get a Perfect Online
              Booking system🗓️.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Message Dasun</Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ height: "40px" }} className="border border-1 border-black">
        a
      </div>
    </div>
  );
};
