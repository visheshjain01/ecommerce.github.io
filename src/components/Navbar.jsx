import React from "react";
import styled from "styled-components";
import { Badge } from '@mui/material';
import {FavoriteBorderOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import { wishlist } from "../pages/Product";

const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h3`
  font-weight: bold;
  font-size: 22px;
  color: #f0516d;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Types = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Cate = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 10px 10px;
`;

const Butto = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  background: url("https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg");
  background-size: cover;
  &:hover {
    transform: scale(1.08);
  }
  margin-top: -8px;
  cursor: pointer;
`
const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-left: 7px;
  border: none;
  background: url("https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17871116/2022/4/13/23570a6e-d737-4f7b-b91d-6bb0097ff4b41649838107836ForeverNewMulticolouredGeometricPrintTop1.jpg");
  background-size: cover;
  background-position-y: 0px;
  &:hover {
    transform: scale(1.08);
  }
  margin-top: -8px;
  cursor: pointer;

`

const Title =styled.span`
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.button`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-left: 25px;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    transform: scale(1.08);
    transition: all 0.5 ease;
    border-bottom: 3px solid pink;
  }
`;

const MenuItemm = styled.button`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-left: 25px;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    transform: scale(1.08);
    transition: all 0.5 ease;
  }
`;

const Name = styled.h3 `
  margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
`
var cartval=0;

function setCartVal(value)
{
  cartval=value;
}

function Navbar (props) {

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo> {props.name ? `Welcome - ${props.name}` : "Login please"} </Logo>
        </Left>
        <Center>
          <Types>
            <Cate>
              <Link style={{textDecoration: "none"}}to="/products">
                <Butto></Butto>
              </Link>
              <Title>
                MEN
              </Title>
            </Cate>
            <Cate>
              <Link style={{textDecoration: "none"}}to="/women">
                <Button></Button>
              </Link>
              <Title>
                WOMEN
              </Title>
            </Cate>
          </Types>
        </Center>
        <Right>
          <Link style={{textDecoration: "none"}}to="/">
            <MenuItem>
              HOME
            </MenuItem> 
          </Link>

          {!props.account && 
          <div>
            <Link style={{textDecoration: "none"}}to="/register">
              <MenuItem>
                REGISTER
              </MenuItem> 
            </Link>
            <Link style={{textDecoration: "none"}}to="/login">
              <MenuItem>
                SIGN UP
              </MenuItem> 
            </Link>
          </div>
          }

          {props.account && 
          <div>
              <MenuItem onClick={props.func}>
                LOGOUT
              </MenuItem> 
          </div>
          }

          <Link style={{textDecoration: "none"}} to="/cart">
            <MenuItemm>
                <Badge style={{marginTop: "24px"}} badgeContent={cartval} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
                <Name>Bag</Name>
            </MenuItemm>
          </Link>
          <Link style={{textDecoration: "none"}} to="/wishlisttt">
            <MenuItemm>
                <Badge style={{marginTop: "24px"}} badgeContent={wishlist} color="primary">
                  <FavoriteBorderOutlined />
                </Badge>
                <Name>Wishlist</Name>
            </MenuItemm>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar
export {setCartVal,cartval}
