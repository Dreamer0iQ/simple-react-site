import React from "react";

export default function ItemsList({id,title, price, img, prev_price,delivery, desc, subdesc, onAdd, onShowItem}){
    return(
        <div className="item">
            <div className="priceDesc">
                <h2>{title}</h2>
                <h3>{'отправка ' + delivery}</h3>
                <p className="price">{price} <s className="prevPrice">{prev_price}</s></p>  
                <p className="addToOrders" onClick={()=>onAdd({title, price, id, img, delivery})}>+</p>
            </div>
            <img className="product_img" src = {"img/" + img} alt = "" onClick={() => onShowItem({id,title, price, img, prev_price,delivery, desc, subdesc})}/>
         </div>
    )
}