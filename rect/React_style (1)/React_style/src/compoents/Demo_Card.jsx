import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import C from '../Style/Card_Item.module.css';

function Demo_Card() {
  const categories = [
    { name: 'Cake & Milk', link: '' },
    { name: 'Coffes & Teas', link: '' },
    { name: 'Pet Foods', link: '' },
    { name: 'Vegetables', link: '' },
  ];

  const categoryItems = categories.map((category, index) => (
    <a href={category.link} key={index} style={{ marginLeft: '20px' }}>
      {category.name}
    </a>
  ));

  return (
    <div>
      <div className={C.categories}>
        <h1>Featured Categories</h1>
        {categoryItems}
      </div>
      <Card sx={{ maxWidth: 145, backgroundColor: '#F2FCE4', margin: '30px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="80"
            width="100%"
            image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png"
            alt="green iguana"
            style={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' }}>
              Cake&Mlik
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
              26 items
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Demo_Card;