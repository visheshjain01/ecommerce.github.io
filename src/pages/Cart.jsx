import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { matrix } from "./Product";
import { useState } from "react";
import { qty } from "./Product";
import { Link } from "react-router-dom";
import { wishlist } from "./Product";
import { setCartVal ,cartval} from "../components/Navbar";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    transform: scale(1.03);
    transition: all 0.5 ease;
    background-color: black;
    color: white;
  }
  letter-spacing: 1px;
`;

const TopTexts = styled.div`
  display: flex;
`;

const TopText = styled.h3`
  font-weight: 500;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction:column;
`;

const Product = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const DetailBrand = styled.span`
  font-size: 18px;
`

const DetailTitle = styled.span`
  margin-bottom: 20px;
  font-size: 18px;
`

const ProductName = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
`;

const ProductId = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
`;

const ProductSize = styled.span`
  font-size: 20px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Productprice = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" ? "500" : "350"};
  font-size: ${(props) => props.type === "total" ? "24px" : "18px"};
`;

const SummaryItemTextt = styled.span`
  text-decoration: ${(props) => props.Disc === 1 ? "line-through" : "none"};
`;

const SummaryItemPricee = styled.span`
  text-decoration: ${(props) => props.Disc === 1 ? "line-through" : "none"};
`;


const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  &:hover{
    background-color: white;
    color: black;
  }
  cursor: pointer;
  margin-top: 30px;
`;

const Delete = styled.button`
  &:hover {
    transform: scale(1.03);
    transition: all 0.5 ease;
    background-color: black;
    color: white;
  }
  margin-top: 100px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: filled;
  background-color: transparent;
  letter-spacing: 0.5px;
`

const Butt = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  background-color: black;
  color: white;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  align-items: center;
  justify-content: center;
`
const Div = styled.div`
  overflow: hidden;
`;

const Innerdiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Innerr = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
`;

const Title1 = styled.h2`
  margin-bottom: 20px;
  font-size: 35px;
`

const Span = styled.span`
  font-size: 20px;
`

const Buttonn = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 40px;
  background-color: white;
  letter-spacing: 2px;
  &:hover{
    color: white;
    background-color: black;
  }
  cursor: pointer;
`

const Img = styled.img`
  height: 370px;
  margin-bottom: 100px;
`

const proid=[];
for(let i=0;i<30;i++)
{
  proid.push(Math.floor(Math.random() * (100000000 - 10000000) ) + 10000000);
}

function Cart (props) {

  const ans=matrix.filter((item) => (item[0] > 0));
  const [result,setCart] = useState(ans);
  const [quantity,setQuantity] = useState(qty);
  // const [dis,setDis] = useState(0);

  var totalprice=0;

  
  function AddQty(x) {
    setQuantity(
        quantity.map((value) =>
            value.id === x
                ? { ...value, val: value.val+1 }
                : { ...value }
        )
    );
  };

  function ReduceQty(x) {

    if(quantity[x].val>1)
    {
      setQuantity(
          quantity.map((value) =>
              value.id === x
                  ? { ...value, val: value.val-1 }
                  : { ...value }
          )
      );
    }
  };


  function SetPrice(val,qty)
  {
    totalprice+=val*(quantity[qty].val);
    return val*(quantity[qty].val);
  }

  function discount()
  {
    if(totalprice>2000)
    {
      return 50;
    }
    
    else
    {
      return 0;
    }
  }

  function shipping()
  {
    if(cartval>0)
    {
      return 50;
    }
    else
    {
      return 0;
    }
  }

  function finalprice()
  {
    if(cartval>0)
    {
      return totalprice+50-discount();
    }

    else
    {
      return 0;
    }
  }

  function removeFromCart(x) {
    matrix[x][0]=0;
    const ansh=matrix.filter((item) => (item[6]!==x && item[0]===1));
    setCart(ansh);
    setCartVal(cartval-1);
  }

  return (
    <>
      {(!props.account && 
        <Div>
          <Navbar name={props.name} account={props.account} func={props.func}/>
          <Announcement />
          <Innerdiv>
            <Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fashionquote9-1624393640.jpg?crop=1xw:1xh;center,top&resize=980:*"></Img>
            <Innerr>
              <Title1>
                PLEASE LOG IN
              </Title1>
              <Span>Log in to view items in your cart</Span>
              <Link to="/login">
                <Buttonn>LOGIN</Buttonn>
              </Link>
            </Innerr>
          </Innerdiv>
          <Footer />
        </Div>
      )}

      {(props.account && cartval===0 &&
          <Div>
          <Navbar name={props.name} account={props.account} func={props.func}/>
          <Announcement />
          <Innerdiv>
            <Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fashionquote9-1624393640.jpg?crop=1xw:1xh;center,top&resize=980:*"></Img>
            <Innerr>
              <Title1>
                Your Cart is empty
              </Title1>
              <Span>There is nothing in your bag.</Span>
              <Span>Let's add some items.</Span>
              <Link to="/">
                <Button>SHOP NOW</Button>
              </Link>
            </Innerr>
          </Innerdiv>
          <Footer />
        </Div>
      )}

    {(props.account && cartval>0 &&
      <Container>
        <Navbar name={props.name} account={props.account} func={props.func}/>
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
          <Link style={{textDecoration: "none"}}to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
            <TopTexts>
              <TopText>Shopping Bag ({cartval}) </TopText>
              <TopText>Your Wishlist ({wishlist})</TopText>
            </TopTexts>
          </Top>
          <Bottom>
            <Info>
            {result.map((item) => (
              <Product>
                <ProductDetail>
                  <Image src={item[3]} />
                  <Details>
                    <ProductName>
                      <b>Product Details:</b> 
                    </ProductName>
                    <DetailBrand> {item[1]}  </DetailBrand>
                    <DetailTitle> {item[2]} </DetailTitle>
                    <ProductId>
                      <b>ID:</b> {proid[item[6]]}
                    </ProductId>
                    <Productprice> <b>Price:</b> Rs. {item[4]} </Productprice>
                    <ProductSize>
                      <b>Size:</b> {item[5]}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Butt>
                      <Add onClick={()=> AddQty(item[6])}/>
                    </Butt>
                    <ProductAmount>{quantity[item[6]].val}</ProductAmount>
                    <Butt>
                      <Remove onClick={()=> ReduceQty(item[6])}/>
                    </Butt>
                  </ProductAmountContainer>
                  <ProductPrice>Rs. {SetPrice(item[4],item[6])}</ProductPrice>
                  <Delete onClick={()=> removeFromCart(item[6])}>Delete From Cart</Delete>
                </PriceDetail>
              </Product>
              ))}
            </Info>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>Rs. {totalprice} </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemTextt Disc = {totalprice > 2000  ? 1 : 0} > Estimated Shipping</SummaryItemTextt>
                <SummaryItemPricee Disc = {totalprice > 2000  ? 1 : 0} > Rs. {shipping()}</SummaryItemPricee>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>Rs. {discount()}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>Rs. {finalprice()} </SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    )}
  </>
  );
};

export default Cart;