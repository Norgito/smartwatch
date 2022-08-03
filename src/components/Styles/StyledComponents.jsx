import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  height: auto;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 70px auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  
`;

const Header = styled.h1`
  color: rgb(169, 115, 185);
  font-size: 3.5rem;
  width: 100%;
  margin-top: 35px;
  text-align: center;
  font-weight: bold;
`;

//Item

const ProdContainer = styled.div`
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
  
`;

const Card = styled.div`
  width: 260px;
  height: min-content;
  padding: 25px;
  background: rgb(27, 27, 27) !important;
  border-radius: 20px;
  transition: 1s;
  &:hover {
    box-shadow: 0 0 25px #e5abfd;
  }
`;

const Image = styled.img`
  width: 100%;
  text-align: center;
  transition: 0.8s;
  &:hover {
    transform: scale(1.2) translateY(-15%);
  }
`;

const CardImg = styled.div`
  height: auto;
  width: 100%;
`;

const H2Style = styled.div`
   color: #ffffff;
   font-size: 1.6rem;
   font-weight: bold;
`;

const Btn = styled.button`
  border-radius: 20px;
  background-color: #000;
  margin-top: 30px;
  font-size: 0.9rem;
  width: 180px;
  height: 35px;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
    letter-spacing: 0.20rem;
    background: #000000;
    box-shadow: 0 0 15px #E3A3FF;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  margin-top: 15px;
  margin-bottom: -15px;
  color: #ffffff;
`;

const LinkDecor = styled.div`
   color: #E3A3FF;
   font-weight: bold;
   margin-top: 7px;
   font-size: 0.9rem;
   
`;

// Loading

const Carga = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export {
  Carga,
  Image,
  CardImg,
  Card,
  ProdContainer,
  Header,
  Container,
  Btn,
  Price,
  LinkDecor,
  H2Style};
