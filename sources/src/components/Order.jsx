import React, { useState } from "react";
import { GoTrashcan } from "react-icons/go";

export default function Order(props){

  let [valueState, setValueState] = useState('')

  function handleSubmit(event){
    if (valueState.length !== 11){
      alert('введите номер телефона состоящий из 11-ти цифр')
      event.preventDefault()
    }else{
      alert('данные были успешно отправлены! Скоро с вам свяжется менеджер')
      event.preventDefault()
    }
  }

  function handleChange(event){
    setValueState(event.target.value)
  }

  if (props.item.img !== undefined){
    return(
      
      <div className="orders">
        <div className="order">
          <div className="order1">
            <span>{props.item.title}</span> <br/>
            <span className="delivery">доставка: {props.item.delivery}</span> <br/>
            <span className="price">стоимость: {props.item.price}</span>
          </div>
          <div>
            <img src={`img/${props.item.img}`} className="smallImg" alt = ''/>
            <GoTrashcan className="trash" onClick={() => props.deleteOrder(props.item.id)}/>
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <div>
        <div className="styledNothing">Корзина с товарами</div>

        <form onSubmit={handleSubmit} className='orderForm'>        
          <label>
            телефон: <input type="tel" placeholder = '89991234567' onChange={handleChange} maxLength="11" className="input" required/>        
          </label>
            <input type="submit" value="Отправить" className="inputSubmit"/>
        </form>

      </div>
      
    );
  }    
}