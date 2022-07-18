import "./StyleItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ prod }) => {

    const onAdd = (cantidad) => {
        console.log(`SE AGREGADO ${cantidad}`);
     }

    return (
        <>
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
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
          </div>
         </div>
        </>
    );
}

export default ItemDetail;