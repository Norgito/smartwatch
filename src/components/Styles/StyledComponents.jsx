import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  height: auto;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 70px;
  margin-bottom: 100px;
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
  font-size: 0.75rem;
  width: 180px;
  height: 35px;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
    letter-spacing: 0.1rem;
    background: #000000;
    box-shadow: 0 0 15px #e3a3ff;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  margin-top: 15px;
  margin-bottom: -15px;
  color: #ffffff;
`;

const LinkDecor = styled.div`
  color: #e3a3ff;
  font-weight: bold;
  margin-top: 7px;
  font-size: 0.9rem;
`;

// Item Count

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100px;
  height: 80px;
  margin-bottom: -30px;
`;

const LabelCount = styled.label`
  width: 100px !important;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: bolder;
  color: rgb(180, 76, 240);
`;

const BotonCount = styled.button`
  text-align: center;
  border-radius: 20%;
`;

// Item Detail

const PLoading = styled.p`
  position: absolute;
  z-index: 1;
  color: white;
  margin-top: 300px;
  letter-spacing: 4px;
`;

const Carga = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemPrice = styled.p`
  margin-top: 20px;
  color: rgb(169, 115, 185);
  font-size: 2rem;
`;

const ItemTitle = styled.p`
  margin: 0 25px;
  color: rgb(169, 115, 185);
  text-align: center;
  font-size: 1.8rem;
`;

const ItemDescrip = styled.p`
  margin: 0 25px;
  color: white;
  text-align: center;
  font-size: 1rem;
`;

const ItemStock = styled.p`
  color: white;
  font-size: 12px;
`;

const ItemCardHeader = styled.div`
  text-align: center;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 500px;
  margin-top: 100px;
`;

const ItemBackground = styled.div` 
  inset: 5px;
  width: 790px;
  height: 490px;
  border-radius: 18px;
  background-color: rgb(0, 0, 0);
  z-index: 1;
`;

const ImgBox = styled.img`
  position: absolute;
  padding: 800px;
  width: 400px;
  margin: 20px;
  height: min-content;
  padding: 25px;
  background: rgb(20, 20, 20) !important;
  border-radius: 20px;
`;

const Cargando = styled.div`
  position: relative;
  margin-top: 300px;
  background: linear-gradient(
    45deg,
    transparent,
    transparent 40%,
    rgb(169, 115, 185)
  );
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: animate 1.5s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: #000;
    border-radius: 50%;
    z-index: 1000;
    &after {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: linear-gradient(
        45deg,
        transparent,
        transparent 40%,
        rgb(169, 115, 185)
      );
      border-radius: 50%;
      z-index: 1000;
      z-index: 1;
      filter: blur(30px);
    }
  }
`;

const ItemProdContainer = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  overflow: hidden;
  border-radius: 20px;
 &::before {
  content: "";
  position: absolute;
  display: flex;
  width: 1300px;
  height: 1000px;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  border-radius: 20px;
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #ffffff
  );
  animation: animate 4s linear infinite;
}&&::after {
  content: "";
  position: absolute;
  display: flex;
  width: 1300px;
  height: 1000px;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  border-radius: 20px;
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #be05ec
  );
  animation: animate 4s linear infinite;
  animation-delay: -2s;
}`;

// Footer

const FooterBackground = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  padding-bottom: 5px;
  
  bottom: 0;
  left: 0;
  justify-content: center;
  flex-direction: row;
  height: 60px;
  color: #a8a7a7;
  background-color: rgb(27, 27, 27)
`;

const FooterSocial = styled.div`
display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;
  
  justify-content: center;
  align-items: center;
  flex-direction: row;

  color: #a8a7a7;
  
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
  H2Style,
  ContainerButton,
  LabelCount,
  BotonCount,
  PLoading,
  ItemPrice,
  ItemTitle,
  ItemDescrip,
  ItemStock,
  ItemCardHeader,
  ItemBackground,
  ImgBox,
  Cargando,
  ItemProdContainer,
  FooterBackground,
  FooterSocial,
};
