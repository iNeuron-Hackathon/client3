import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item'
import { useParams } from 'react-router-dom'

const items = [
    {   id:'2303adef',   
        name: 'Dosa',
        price: 24
    },
    {   id:'2309adef',
        name: 'Burgur',
        price: 190
    },
    {   id:'2307adef',
        name: 'Pav Bhaji',
        price: 20
    },
    {   id:'2306adef',
        name: 'Idli',
        price: 40
    },
]
const Menu = () => {
    const {tableNo} = useParams()
    const [items, setItems] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/menu?table=${tableNo}`)
            .then(resp => {
                const result = resp.data
                if(result.success){
                    console.log(result.items);
                    setItems(result.items)
                }
                else{
                    console.log(result.message);
                }
            })
    }, [])
  return (
    <div>
        <h1>Menu</h1>
        {items.map(i => <Item key={i._id} id={i._id} name={i.name} price={i.price}/>)}
    </div>
  )
}

export default Menu