import React, {useState} from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import Order from './Order';

export default function Header(props) {
  let [cartOpen, setCart] = useState()

  function openedCart(){
    let summa = 0
    props.orders.forEach(element => {
      if (!isNaN(Number.parseFloat(element.price))){summa = summa + Number.parseFloat(element.price)}
    });
    return(
      <div className='openCart1'>
        {props.orders.map((el, index)=>(
          <Order key = {index} item = {el} deleteOrder = {props.deleteOrder}/>
        ))}
        <p className='styledNothing'>Сумма: {summa} ₽</p>
      </div> 
    )
  }

  return (
    <header>
        <div className='headerSh'>
            <span className ='logo'>Enchanted</span>
            <img className = "planet" src="img/planet.png" alt = ""/>
            <span className ='logo'>get real</span>
        </div>
        <div className='under_header'>
            <MdOutlineShoppingCart onClick={()=>setCart(!cartOpen)} className={`cart`}/>
            <div className={`openCart ${!cartOpen && 'active'}` }> {cartOpen === true && openedCart()} </div>
        </div>
    </header>
  )
}