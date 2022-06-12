import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../features/cart/cartSlice'

const Item = ({name, price, id}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    // console.log(cart);

  return (
        <Box display='flex' width='80%' justifyContent='space-between'>
            <Typography variant="h5" gutterBottom>
                {name}
            </Typography>

            <Typography variant="h5" gutterBottom>
                {price}
            </Typography>

            <Button onClick={()=> dispatch(addItemToCart({name, price, id}))}>+ Add</Button>
        </Box>
  )
}

export default Item