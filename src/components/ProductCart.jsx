import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch } from 'react-redux';
import { LIKE_SAVE, ORDERED_PRODUCT, SAVED_PRODUCT } from '../redux/types';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function ProductCart({ item }) {
  const dispatch = useDispatch();

  return (
    <Card className='!bg-slate-200 p-2 rounded-lg' sx={{ maxWidth: 345 }}>
      <CardMedia className='bg-white rounded-lg h-[240px]'
        component="img"
        image={item.images[0]}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
        </Typography>
      </CardContent>
      <div className='flex space-x-2'>
        <Button 
          onClick={() => dispatch({ type: LIKE_SAVE, payload: item })}
          startIcon={<Favorite />} 
          color='error' 
          variant='contained'>
          Like
        </Button>
        <Button 
          onClick={() => dispatch({ type: SAVED_PRODUCT, payload: item })}
          startIcon={<GradeIcon />} 
          color='warning' 
          variant='contained'>
          Saved
        </Button>
        <Button 
          onClick={() => dispatch({ type: ORDERED_PRODUCT, payload: item })}
          startIcon={<LocalShippingIcon />} 
          color='secondary' 
          variant='contained'>
          Order
        </Button>
      </div>
    </Card>
  );
}