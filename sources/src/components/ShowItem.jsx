import React from 'react'
import { BsXCircle } from "react-icons/bs";
export default function ShowItem(props){
        return(
            <div className={`modalWindow`}>
                <BsXCircle className='closeButton' onClick={()=>{props.onShowItem(props.item)}} ></BsXCircle>
                <img src = {`img/${props.item.img}`} className='modalWindowImg' alt= ''></img>
                    <div className='allModal'>
                        <div className='modalWindowAbout'>
                            <div className='modalWindowTitle'>{props.item.title}</div>
                            <div className='modalWindowPrice'>{props.item.price}</div>
                            <div className='modalWindowDesc'>{props.item.desc}</div> <br/>
                            <div className='modalWindowSubDesc'>Состав: {props.item.subdesc}</div>
                            <div className='modalWindowAdd' onClick={()=>props.onAdd(props.item)}>Добавить в корзину</div>
                        </div>
                    </div>
            </div>
        )
}