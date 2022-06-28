import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useParams } from 'react-router-dom';
import { allProducts } from "../data";
import {FavoriteBorderOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import { useState } from "react";
import { setCartVal,cartval } from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 820px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h3`
  font-weight: 300;
  margin-top: 10px;
  font-size: 20px;
  letter-spacing: 0.7px;
`;

const Brand = styled.h1`
  font-weight: 600;
`

const Desc = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 17px;
  letter-spacing: 0.7px;
`;

const ProductDetails = styled.h3`
  font-size: 20px;
  margin-top: 20px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Material = styled.p`
  margin-top: 10px;
`;

const Care = styled.h3`
  margin-top: 20px;
`;

const Line = styled.hr`
  margin-top: 30px;
  border-bottom: none;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 40px;
  display: flex;
`;

const SizeContainer = styled.div`
  display: flex;
`;

const Buttonn = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0px 10px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5 ease;
    border: 2px solid rgb(226, 72, 98);
  }
  cursor: pointer;
  background-color: white;
  border: ${(props) => props.colour === "XS" && " 2px solid rgb(226, 72, 98)"};
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 30px;
`;

const AddContainer = styled.div`
  margin-left: 80px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
`
const Warn = styled.h3`
  margin-top: 30px;
  margin-left: 40px;
  color: rgb(226, 72, 98);
`

const Button = styled.button`
  margin-top: 30px;
  margin-right: 40px;
  width: 200px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    transform: scale(1.03);
    transition: all 0.5 ease;
    background-color: black;
    color: white;
    border: none;
  }
  align-items: center;
  display: flex;
  justify-content: center;
`;

function setCount(val)
{
  count=val;
}

function setCountOne(val)
{
  count1=val;
}

function setWish(val)
{
  wishlist=val;
}

const matrix = new Array(25).fill(0).map(() => new Array(7).fill(0));
const Wishlistt = new Array(25).fill(0).map(() => new Array(7).fill(0));
var count1=0;
var count=0;
var wishlist=0;
const qty=[];

function Product (props) {

  const { proId } = useParams();
  const anss=allProducts.find((item) => (item.id==proId));
  const [sizee, setSize] = useState('');
  const [Warning, setWarning] = useState("");
  const [Val, setVal] = useState(cartval);
  const [sarthak,setSarthak]=useState(wishlist);
   const [isColor,setColor]=useState('');


  function handleWishlist(x)
  {
   
    if(!props.account)
    {
      return;
    }

    var check=0;
    for(let j=0;j<count1;j++)
    {
      if(Wishlistt[j][0]===1 && Wishlistt[j][5]===x.id)
      {
        check++;
      }
    }
    if(check===0)
    {
      setWish(wishlist+1);
      Wishlistt[count1][0]=1;
      for (let i=1;i<7;i+=1) 
      {
        if(i===1)
        {
          Wishlistt[count1][i]=x.company;
        }
        else if(i==2)
        {
          Wishlistt[count1][i]=x.title;
        }
        else if(i==3)
        {
          Wishlistt[count1][i]=x.img;
        }
        else if(i==4)
        {
          Wishlistt[count1][i]=x.price;
        }
        else if(i==5)
        {
          Wishlistt[count1][i]=x.id;
        }
        else
        {
          Wishlistt[count1][i]=count1;
        }
      }
      setCountOne(count1+1);
      setSarthak(wishlist);
    }
  }

  function handleChange(val)
  {
    if(!props.account)
    {
      return;
    }
    
    if(sizee==='')
    {
      setWarning("Please select a size")
      return;
    }

    qty.push({id:count,val:1});
    setCartVal(cartval+1);
    matrix[count][0]=1;
    for (let i=1;i<7;i+=1) 
    {
      if(i===1)
      {
        matrix[count][i]=val.company;
      }
      else if(i==2)
      {
        matrix[count][i]=val.title;
      }
      else if(i==3)
      {
        matrix[count][i]=val.img;
      }
      else if(i==4)
      {
        matrix[count][i]=val.price;
      }
      else if(i==5)
      {
        matrix[count][i]=sizee;
      }
      else
      {
        matrix[count][i]=count;
      }
    }
    setCount(count+1);
    setVal(cartval);
  }

  function Change(val)
  {
    setSize(val);
    setWarning("");
    setColor(val);
  }

  return (
    <Container>
      <Navbar name={props.name} account={props.account} func={props.func}/>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={anss.img} />
        </ImgContainer>
        <InfoContainer>
          <Brand>{anss.company}</Brand>
          <Title>{anss.title}</Title>
          <ProductDetails>Product Details</ProductDetails>
          <Desc>{anss.details}</Desc>
          <Price>Rs. {anss.price}</Price>
          <Care>Material</Care>
          <Material>{anss.material}</Material>
          <Line></Line>
          <Warn>{Warning}</Warn>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <SizeContainer>
                <Buttonn colour = {isColor === "XS" ? "XS" : ''} onClick={()=>Change('XS')}>XS</Buttonn>
                <Buttonn colour = {isColor === "S" ? "XS" : ''} onClick={()=>Change('S')}>S</Buttonn>
                <Buttonn colour = {isColor === "M" ? "XS" : ''} onClick={()=>Change('M')}>M</Buttonn>
                <Buttonn colour = {isColor === "L" ? "XS" : ''} onClick={()=>Change('L')}>L</Buttonn>
                <Buttonn colour = {isColor === "XL" ? "XS" : ''} onClick={()=>Change('XL')}>XL</Buttonn>
                <Buttonn colour = {isColor === "XXL" ? "XS" : ''} onClick={()=>Change('XXL')}>XXL</Buttonn>
              </SizeContainer>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button onClick={()=>handleChange(anss)}><Icon><ShoppingCartOutlined /></Icon>ADD TO CART</Button>
            <Button onClick={()=>handleWishlist(anss)}><Icon><FavoriteBorderOutlined /></Icon>ADD TO WISHLIST</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
export {matrix};
export {cartval};
export {count,setCount,setCountOne};
export {qty};
export {Wishlistt,wishlist,setWish};