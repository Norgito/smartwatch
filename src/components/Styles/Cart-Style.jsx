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
  justify-content: space-around;
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

const H3Cart = styled.div`
  color: rgb(169, 115, 185);
  margin: 10px;
  font-size: 1.5rem;
  text-align: center;
`;

const H4Cart = styled.div`
  color: rgb(169, 115, 185);
  margin-bottom: 10px;
  margin-top: -5px;
  font-size: 1.2rem;
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
  margin: 10px;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  width: 100px;
`;

const BtnProceed = styled.button`
  align-self: center;
  margin: 20px;
  background-color: rgb(128, 50, 151);
  border-style: none;
  border-radius: 10px;
  color: white;
  width: 120px;
  height: 25px;
`;

const TotalPrice = styled.div`
  color: #ffffff;
  margin-top: 10px;
  align-self: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  margin: 5px;
  height: 20px;
  margin-bottom: 20px;
  border: 2px solid rgb(179, 91, 206);
  border-radius: 5px;
`;

// CHECKOUT

const BtnCheckout = styled.button`
  align-self: center;
  border-radius: 20px;
  background-color: #000;
  margin-top: 20px;
  font-size: 0.8rem;
  width: 150px;
  height: 35px;
  margin-bottom: 20px;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
    letter-spacing: 0.15rem;
    background: #000000;
    box-shadow: 0 0 15px #e3a3ff;
  }
`;

const Btn = styled.button`
  margin-left: 50px;
  border-radius: 20px;
  background-color: #000;
  margin-top: 20px;
  font-size: 0.8rem;
  width: 200px;
  height: 35px;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
    letter-spacing: 0.1rem;
    background: #000000;
    box-shadow: 0 0 15px #e3a3ff;
  }
`;

export {
  CartContainer,
  CartInfo,
  ImageCart,
  H1Cart,
  H2Cart,
  H3Cart,
  H4Cart,
  TextCart,
  BtnRemoveAll,
  TotalPrice,
  BtnProceed,
  Form,
  Input,
  BtnCheckout,
  Btn,
};
