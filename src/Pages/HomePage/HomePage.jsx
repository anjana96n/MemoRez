import React from 'react'
import './HomePage.css'
import Sidebar from '../../Components/SideNavi/Sidebar';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export const HomePage = ()=>{
    return(
        <div>
            <Sidebar/>
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
            
            

        </div>
    )
}