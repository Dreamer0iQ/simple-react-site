import React from "react";

export default function Categories(props){
    const categories = [
        {
            key: 'all',
            name: 'всё'
        },
        {
            key: 'hoodie',
            name: 'свитшоты'
        },
        {
            key: 'scarf',
            name: 'шарфы'
        },
        {
            key: 'sweater',
            name: 'свитера'
        },
        {
            key: 'shirt',
            name: 'майки'
        },
    ]
        return(
            <div className="categories"> {categories.map((el)=> {
                return(<div key = {el.key} className='categoryItem' onClick={() => {props.chooseCategory(el.key)}}>{el.name}</div>)
            })}</div>
        )
}