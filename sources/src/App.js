import React, {useState} from "react";

import Intro from "./components/intro";
import Footer from "./components/footer";
import Header from "./components/header";
import SortedItems from './components/sort_items'
import products from './products.js'
import Categories from "./components/categories";
import ShowItem from "./components/ShowItem";

function App() {
  const [items] = useState(products);
  const [orders, setOrders] = useState([{}]);
  const [currentItems, setStateCurrent] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})


  function addToOrder(item){
    let access = false
    orders.forEach((el)=> {
      if (el.id === item.id){access = true}
    })
    if (access !== true) {setOrders(orders.concat(item))}
  }

  function deleteFromOrder(id){
    setOrders(orders.filter(order => order.id !== id));
  }

  function chooseCategory(category){
    if (category === 'all'){
      setStateCurrent(items)
    }else{setStateCurrent(items.filter(el=> el.categories === category))}
  }

  function onShow(item){
    setFullItem(item)
    setShowFullItem(!showFullItem)
  }

  return (
    <div>
      <Intro/>
      <div className="wrapper">
        <Header orders = {orders} deleteOrder = {deleteFromOrder}/>
        <Categories chooseCategory = {chooseCategory}/>
        <div><SortedItems items = {currentItems} onAdd={addToOrder} onShowItem = {onShow}/> </div>

        <div className={`fullOrder ${showFullItem && 'active'}`}> {showFullItem === true && <ShowItem item = {fullItem} onAdd={addToOrder} onShowItem = {onShow}/>} </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
