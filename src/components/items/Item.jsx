import React from 'react'
import {Card, CardImg, Image, Btn, Price, H2Style} from'../Styles/StyledComponents'
import { Link } from 'react-router-dom';

const Item = ({prod, id}) => {
    return (
        <div key={prod.id}>
            <Card>
             <CardImg>
               <Image src={prod.image} alt={prod.product_name} />
             </CardImg>
                <H2Style>{prod.product_name}</H2Style>
                
                <Price>${prod.price}</Price>
                <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                <Btn style={{cursor: "pointer"}}>MORE DETAILS...</Btn>
                </Link>
                
            </Card>
        </div>
    )
}

export default Item