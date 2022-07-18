import React from 'react'
import {Card, CardImg, Image, Btn, Price, LinkDecor, H2Style} from'../StyledComponents'
import { Link } from 'react-router-dom';

const Item = ({prod, id}) => {
    return (
        <div key={prod.id}>
            <Card>
             <CardImg>
               <Image src={prod.image} alt={prod.product_name} />
             </CardImg>
                <H2Style>{prod.product_name}</H2Style>
                <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                    <LinkDecor> MORE DETAILS...</LinkDecor>
                </Link>
                <Price>${prod.price}</Price>
                <Btn style={{cursor: "pointer"}}>ADD TO CART</Btn>
            </Card>
        </div>
    )
}

export default Item