import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty } from '../features/cart/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
    <Box>
        <Typography variant='h5'>
            {item.name}     X {item.qty}
        </Typography>
        <Typography variant='h5'>
             {item.amount}Rs 
        </Typography>
        <Button onClick={()=> dispatch(decrementQty(item.id))}>-</Button>
        <Button onClick={()=> dispatch(incrementQty(item.id))}>+</Button>
    </Box>
  )
}

export default CartItem