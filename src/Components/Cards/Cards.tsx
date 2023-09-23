import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import img from '../../images/picture1.jpg';
import img2 from '../../images/picture2.jpg';
import img3 from '../../images/picture3.jpg';
import "./Cards.css";

const Cards= () => {
  return (
    <>
     <div className="cards-container">
    <Card className='cardss'
    sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={img}
          alt="green iguana"
        />
        <CardContent>
          The best Property in the market ,avaliable in less and afordable price 
          only in 4500$
        </CardContent>
      </CardActionArea>
      
    </Card>
    <Card className='cardss'
    sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={img2}
          alt="green iguana"
        />
        <CardContent>
          The best Property in the market ,avaliable in less and afordable price 
          only in 4500$
        </CardContent>
      </CardActionArea>
      
    </Card>
    <Card className='cardss'
    sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={img3}
          alt="green iguana"
        />
        <CardContent>
          The best Property in the market ,avaliable in less and afordable price 
          only in 4500$
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
    </>
  );
}

export default Cards;
