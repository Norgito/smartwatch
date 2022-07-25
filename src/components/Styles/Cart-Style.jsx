import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
   flex-direction: column;
`;

const CartInfo = styled.div`
   width: 800px;
   position: relative;
   align-items: center;
   display: flex;
   justify-content:space-around;
`;

const ImageCart = styled.img`
  width: 130px;
`;

const H1Cart = styled.div`
  color: rgb(169, 115, 185);
   margin-top: 100px;
   margin-bottom: 30px;
   font-size: 2.5rem;
   text-align: center;
`;

const H2Cart = styled.div`
   color: white;
   position: relative;
   display: flex;
   font-size: 20px !important;
`;

const TextCart = styled.div`
   align-self: center;
   color: white;
`;


const BtnRemoveAll = styled.button`
    margin-top: 10px;
    align-self: flex-end;
`;

export {
  CartContainer,
  CartInfo,
  ImageCart,
  H1Cart,
  H2Cart,
  TextCart,
  BtnRemoveAll,
}