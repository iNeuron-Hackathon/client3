import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart : (state, action) => {
        // console.log(action.payload);
        // console.log(state);

        // push item to cart array
        let item = action.payload
        let exist = false

        for (let i of state) {
            if(i.id===item.id){
                i.qty += 1
                exist = true
            }
        }

        if(!exist) state.push({...item, qty:1})

        for(let i of state){
            i.amount = i.price * i.qty
        }

    },
    incrementQty : (state, action) => {
        const id = action.payload
        state.forEach(item => {
            if(item.id===id){
                item.qty += 1
            }
        })

        for(let i of state){
            i.amount = i.price * i.qty
        }
    },
    decrementQty : (state, action) => {
        const id = action.payload

        const indexOfObject = state.findIndex(item => {
            return item.qty===1 && item.id===id;
        });
        
        //   console.log(indexOfObject);
        if(indexOfObject>=0)
            state.splice(indexOfObject, 1)
        else {
            for(const item of state){
                if(item.id===id && item.qty>1){
                    item.qty -= 1
                }
                
            }
            
          }

          for(let i of state){
            i.amount = i.price * i.qty
        }
          
    },
    
  }
})

export const { addItemToCart, incrementQty, decrementQty } = cartSlice.actions

export default cartSlice.reducer