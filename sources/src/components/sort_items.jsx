import React from "react";
import Items from './ItemsList.jsx'

export default function Sort({items, onAdd, onShowItem}){
    return (
        <div className="products">
            {items.map(item => <Items key={item.id} {...item} onAdd={onAdd} onShowItem={onShowItem} />)}
        </div>
    )
}