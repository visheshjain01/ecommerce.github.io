import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({Data}) => {
  return (
    <Container>
      {Data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;