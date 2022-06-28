import styled from "styled-components";
import { Link } from 'react-router-dom';
  
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
  
  const Container = styled.button`
    position: relative;
    border: none;
    outline: none;
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
    height: 75%;
  `;
  
  const Icon = styled.button`
    letter-spacing: 2px;
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
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    &:hover {
      transform: scale(1.1);
      color: white;
      background-color: black;
    }
  `;

  const About = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
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

  const Product = ({ item }) => {

  
    return (
    <Link style={{textDecoration: "none"}} key={item.id} to={`/products/${item.id}`}>
      <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                TAKE A LOOK
            </Icon>
        </Info>
        <About>
          <Company> {item.company} </Company>
          <Title> {item.title} </Title>
          <Price>Rs. {item.price} </Price>
        </About>
      </Container>
    </Link>
    );
  };
  
  export default Product;