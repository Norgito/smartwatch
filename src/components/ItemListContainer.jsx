import React from 'react';
import { Header, Container } from './StyledComponents';

const ItemListContainer = ({greeting}) => {
  return (
    <Container>
        <Header>{greeting}</Header>
    </Container>
  );
}


export default ItemListContainer;

