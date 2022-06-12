import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const cart = useSelector(state => state.cart)

  const getTotalAmount = (cart)=>{
    let total =0
    cart.forEach(i=> total += i.amount)

    return total
  }

  let navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReactMeals
          </Typography>

          <Button color="inherit" onClick={handleOpen}>Cart({cart.length})</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

          >
            <Box sx={style}>
              This is your cart
              {cart.map(item => <CartItem key={item.id} item={item}/>)}

              {cart.length ? 
              <>
                Total Amount : {getTotalAmount(cart)}Rs

                <Button onClick={(e)=>{ navigate('/auth') }}>
                  Place Order
                </Button>
              </>
               : null
               }
            </Box>

          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header