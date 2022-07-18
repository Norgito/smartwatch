import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 70px auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  
`;

const Header = styled.h1`
  background: #FFFFFF;
background: linear-gradient(to right, #FFFFFF 0%, #950ECF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  font-size: 3.5rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

//Item

const ProdContainer = styled.div`
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
  
`;

const Card = styled.div`
  width: 300px;
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
    transform: scale(1.3) translateY(-15%);
  }
`;

const CardImg = styled.div`
  height: auto;
  width: 100%;
`;

const H2Style = styled.div`
   color: #ffffff;
   font-size: 2rem;
   font-weight: bold;
`;

const Btn = styled.button`
  border-radius: 20px;
  background-color: #000;
  margin-top: 20px;
  font-size: 1rem;
  width: 200px;
  height: 40px;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
    letter-spacing: 0.25rem;
    background: #000000;
    box-shadow: 0 0 15px #E3A3FF;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  margin-top: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const LinkDecor = styled.div`
   color: #E3A3FF;
   font-weight: bold;
   margin-top: 7px;
   font-size: 1rem;
   
`



export { Image, CardImg, Card, ProdContainer, Header, Container, Btn, Price, LinkDecor, H2Style};
