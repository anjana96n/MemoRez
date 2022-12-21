import React from "react";
import "./HomePage.css";
import Sidebar from "../../Components/SideNavi/Sidebar";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "bootstrap/dist/css/bootstrap.min.css";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>
        {" "}
        <Sidebar />{" "}
      </div>

      <div class="container pb-8 mt-8">
        <div class="row mb-8">
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://banuphotography.com/wp-content/uploads/2021/06/mannar-wedding-77.jpg"
                alt="Jaffna"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Deshan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dasun
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your event photography
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="gig1" size="small">
                  Details
                </Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Joshep
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your any event
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    navigate("/gig");
                  }}
                >
                  Details
                </Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/wedding-photography-tips-13.jpg?fit=1500%2C1000&ssl=1"
                alt="Jaffna"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Piyumi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.mos.cms.futurecdn.net/2nPAyuKxsXdZ37wsiKrCbF.jpg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your event photography
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://iso.500px.com/wp-content/uploads/2015/07/weddings_cover.jpeg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Asanka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your any event
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.squarespace-cdn.com/content/v1/578537f5cd0f68f8a7411561/1563066377271-DST1DID3B4RHI35Q9X97/Phoenix+Wedding+Photographer"
                alt="Jaffna"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tharaka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://3.bp.blogspot.com/-iPr7vk2-hG0/WnUeFW4kw1I/AAAAAAAA2Pw/h0Fs8dxgzZQMMtP4R0bNDDYqbcd8d60eQCEwYBhgL/s1600/1NT_4793.png"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ishan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your any event photography
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-4  mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://1.bp.blogspot.com/-4Djc8tVG-do/XXUBYe-mF-I/AAAAAAAF0Xc/E2DLXPQsyAgLjU87_897lBkgPfSjzT_TwCLcBGAs/w1200-h630-p-k-no-nu/NTSR4523.png"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gayani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your any event
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </div>
          <div
            style={{ height: "30px" }}
            className="border border-1 border-black"
          >
            asda
          </div>
        </div>
      </div>
    </div>
  );
};
