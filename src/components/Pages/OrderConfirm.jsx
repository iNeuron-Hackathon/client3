import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const OrderConfirm = () => {
    const cart = useSelector(state => state.cart)

    // console.log(cart);
    const getTotalAmount = (cart)=>{
        let total =0
        cart.forEach(i=> total += i.amount)
    
        return total
      }
  return (
    <div>
        <Button size='large' onClick={(e)=>{
            axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, {orderItems:cart, totalPrice:getTotalAmount(cart)})
                .then(resp => {
                    const result = resp.data
                    if(result.success){
                        alert('Order placed successfully')
                    }
                })
                .catch(err => {
                    alert('Error occured')
                })
        }}>
            Confirm Order
        </Button>
    </div>
  )
}

export default OrderConfirm