
import React from 'react'
import Item from './Item'


function Itemlist ({items}) {
    return (
        items.map((prod) => <Item key={prod.id} prod={prod} id={prod.id} />)
    )
}

export default Itemlist

