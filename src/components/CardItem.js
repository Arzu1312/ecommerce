import React from 'react';
import { useCart } from 'react-use-cart'

const Carditem = (props) => {

   const {addItem} =useCart();

    return (
        
             
                <div className='col mt-5'>
                    <div className="card">

                    <div className="imgBox">
                      <img src={props.img} className="product"/>
                    </div>
                    
                    <div className="contentBox">
                      <h3>{props.title}</h3>
                      <h2 className="price">${props.price}</h2>
                      <button href="#" className="buy" onClick={()=>addItem(props.item)}>Add Cart</button>
                    </div>
                    
                    </div>
                    
                </div>
             
           
    )
}

export default Carditem