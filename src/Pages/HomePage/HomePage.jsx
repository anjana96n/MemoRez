import React from "react";
import "./HomePage.css";
import Sidebar from "../../Components/SideNavi/Sidebar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export const HomePage = () => {
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
      {/* <Container>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row>
          <Col xs={{ order: "last" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/949224/pexels-photo-949224.jpeg?cs=srgb&dl=pexels-dimitri-kuliuk-949224.jpg&fm=jpg"
                alt="Jaffna"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Deshan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around Jaffna
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </Col>

          <Col xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.spadestudio.lk/wp-content/uploads/2020/07/thejani-tharindu-wedding-highlights-610x448.jpg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kasun
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around Kandy
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </Col>

          <Col xs={{ order: "first" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.spadestudio.lk/wp-content/uploads/2020/07/thejani-tharindu-wedding-highlights-610x448.jpg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kasun
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around Kandy
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </Col>
        </Row>

        <Row></Row>
        <Row></Row>
        <Row></Row>

        <Row>
          <Col xs={{ order: "last" }}>
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
                  I will cover your wedding and preshoot around Jaffna
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </Col>

          <Col xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.spadestudio.lk/wp-content/uploads/2020/07/thejani-tharindu-wedding-highlights-610x448.jpg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kasun
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around Kandy
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </Col>

          <Col xs={{ order: "first" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.spadestudio.lk/wp-content/uploads/2020/07/thejani-tharindu-wedding-highlights-610x448.jpg"
                alt="Kandy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kasun
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I will cover your wedding and preshoot around Kandy
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Contact</Button>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};
