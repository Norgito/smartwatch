import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import "./StyleItemDetail.css"
import {Btn, Carga} from'../Styles/StyledComponents'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../CartContext';

const ItemDetail = ({ prod }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (quantity) => {
        setItemCount(quantity);
        test.addItem(prod, quantity);
     }

    return (
        <>
        { 
           prod && prod.image 
           ?
        <div className="singleProdContainer">
         <div className="bkgrnd">
          <div className="singleProd">
            <img src={prod.image} alt={prod.product_name} className="imgBox" />
            </div>
            <div className="card_header">
                <h2 className="prodH2">{prod.product_name}</h2>
                <p>{prod.description}</p>
                <p className='price'>$ {prod.price}</p>
                <p className="stock">Available: {prod.stock} Units</p>
                {
                        itemCount === 0
                        ? <ItemCount stock={prod.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}>
                            <Btn style={{cursor: "pointer"}}>CHECKOUT</Btn>
                        </Link>
                    } 
            </div>
          </div>
         </div>
         : <>
            <Carga>
            <p className='pLoading'>LOADING</p>
            <div className='cargando'></div>
            </Carga>
         </>
       }
        </>
    );
}

export default ItemDetail;