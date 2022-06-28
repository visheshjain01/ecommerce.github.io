import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from "styled-components";
import { wishlist,Wishlistt,setWish } from './Product'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Info = styled.div`
position: relative;
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
z-index: 2;
display: flex;
align-items: center;
background-color: rgba(0, 0, 0, 0.2);
justify-content: center;
cursor: pointer;
`;

const Delete = styled.button`
opacity: 0;
cursor: pointer;
position: absolute;
right: 10px;
top: 10px;
width: 30px;
border: none;
outline: none;
height: 30px;
border-radius: 50%;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
&:hover {
  transform: scale(1.1);
}
z-index: 3;
`

const Product = styled.button`
border: none;
outline: none;
position: relative;
flex: 1;
margin: 15px;
width: 450px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
cursor: pointer;
&:hover ${Info}{
  opacity: 1;
}

// &:hover {
//       background-color: #e9f5f5;
//       transform: scale(1.03);
//       transition: all 0.5 ease;

// }
`;

const Image = styled.img`
margin-left: 10px;
height: 350px;
`;

const Icon = styled.button`
cursor: pointer;
position: absolute;
bottom: 40px;
left: 180px;
width: 120px;
border: none;
outline: none;
height: 40px;
border-radius: 10px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
letter-spacing: 2px;
&:hover{
  color: white;
  background-color: black;
  transform: scale(1.1);
}
`;

const Divi = styled.div`
&:hover ${Delete}{
    opacity: 1;
}
position: relative;
`;

const About = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
justify-content: space-between;
width: 300px;
`
const Company = styled.h1`
margin-bottom: 10px;
`
const Title = styled.span`
margin-bottom: 10px;
font-size: 16px;
`

const Price = styled.p`
margin-top: 20px;
text-align: center;
font-weight: 800;
font-size: 24px;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const Container = styled.div`
`;

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
  margin-bottom: 100px;
`;

const Title1 = styled.h2`
  margin-bottom: 20px;
  font-size: 35px;
`

const Span = styled.span`
  margin-bottom: 0px;
  font-size: 20px;
`

const Button = styled.button`
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
  margin-bottom: 80px;
`

function Wishlist (props) {

  const ans=Wishlistt.filter((item) => (item[0] > 0));
  const [result,setWishlist] = useState(ans);

  function removeFromWishlist(x) {
    Wishlistt[x][0]=0;
    const ansh=Wishlistt.filter((item) => (item[6]!=x && item[0]===1));
    setWishlist(ansh);
    setWish(wishlist-1);
  }

  return (
    <>

      {(!props.account && 
        <Div>
          <Navbar name={props.name} account={props.account} func={props.func}/>
          <Announcement />
          <Innerdiv>
            <Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fashionquote6-1624393432.jpg?crop=1xw:1xh;center,top&resize=980:*"></Img>
            <Innerr>
              <Title1>
                PLEASE LOG IN
              </Title1>
              <Span>Log in to view items in your wishlist</Span>
              <Link to="/login">
                <Button>LOGIN</Button>
              </Link>
            </Innerr>
          </Innerdiv>
          <Footer />
        </Div>
      )}

      {(props.account && wishlist===0 &&
          <Div>
          <Navbar name={props.name} account={props.account} func={props.func}/>
          <Announcement />
          <Innerdiv>
            <Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fashionquote6-1624393432.jpg?crop=1xw:1xh;center,top&resize=980:*"></Img>
            <Innerr>
              <Title1>
                Your Wishlist is empty
              </Title1>
              <Span>Save items that you like in your wishlist.</Span>
              <Span>Review them anytime and easily move them to the bag.</Span>
              <Link to="/">
                <Button>SHOP NOW</Button>
              </Link>
            </Innerr>
          </Innerdiv>
          <Footer />
        </Div>
      )}

    {(props.account && wishlist>0 &&
      <Container>
          <Navbar name={props.name} account={props.account} func={props.func}/>
          <Announcement />
          <h1 style={{marginLeft: "28px", marginTop: "30px"}}>YOUR WISHLIST</h1>
          <Wrapper>
              {result.map((item) => (
              <Divi>
                  <Delete onClick={()=> removeFromWishlist(item[6])}>
                      <CloseIcon />
                  </Delete>
                  <Link style={{textDecoration: "none"}} key={item[5]} to={`/products/${item[5]}`}>    
                      <Product>
                          <Image src={item[3]} />
                          <Info>
                              <Icon>
                                  TAKE A LOOK
                              </Icon>
                          </Info>
                          <About>
                              <Company> {item[1]} </Company>
                              <Title> {item[2]} </Title>
                              <Price>Rs. {item[4]} </Price>
                          </About>
                      </Product>
                  </Link>
              </Divi>
              ))}
          </Wrapper>
          <Newsletter />
          <Footer />
      </Container>
    )}
  </>
  )
}

export default Wishlist