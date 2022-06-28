import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 6px;
  height: 600px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: -300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight: 600;
    font-family: Geograph,Helvetica,Arial,sans-serif;
    letter-spacing: 2px;
    &:hover{
      background-color: black;
      color: white;
    }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
              {(item.id===1 && 
                <Link to="/products/11"><Button>SHOP NOW</Button></Link>
              )}
              {(item.id===2 && 
                <Link to="/products/36"><Button>SHOP NOW</Button></Link>  
              )}
              {(item.id===3 && 
                <Link to="/products/47"><Button>SHOP NOW</Button></Link>  
              )}
      </Info>
    </Container>
  );
};

export default CategoryItem;