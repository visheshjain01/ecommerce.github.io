import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { allProducts } from "../data";
import { useState } from "react";

const Container = styled.div``;

// const Title = styled.h1`
//   margin: 20px;
// `;

const Clothing = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-left:600px;
`;

const Button = styled.button`
  letter-spacing: 0.6px;
  outline: none;
  width: 80px;
  height: 40px;
  margin-left: 30px;
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: black;
  }
  align-items: center;
  display: flex;
  justify-content: center;
`

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

function Women (props) {

  const ans=allProducts.filter((item) => (item.id>=28));
  const [Data, setData] = useState(ans);
  const [Vishesh,setVishesh] = useState();
  const [Type,setType] = useState("All");
  
  function handleChange(x) {

    if(x==="Dresses")
    {
      setType("Dresses")
      setData(allProducts.filter((item) => (item.id>=28 && item.id<=36)))
    }

    else if(x==="Jackets")
    {
      setType("Jackets")
      setData(allProducts.filter((item) => (item.id>=37 && item.id<=45)))
    }

    else if(x==="Tops")
    {
      setType("Tops")
      setData(allProducts.filter((item) => (item.id>=46 && item.id<=54)))
    }

    else
    {
      setType("All")
      setData(allProducts.filter((item) => (item.id>=28 && item.id<=54)))
    }
  }

  function handleSort(event)
  {
    if(event.target.value==="high")
    {
      handleChange(Type);
      setData(Data.sort((a,b) => (a.price < b.price) ? 1 : ((a.price > b.price) ? -1 : 0)));
      setVishesh(Data);
    }

    else if(event.target.value==="low")
    {
      handleChange(Type);
      setData(Data.sort((a,b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0)));
      setVishesh(1);
    }

    else
    {
      handleChange(Type);
      setVishesh(Data);
    }
  }
  
  return (
    <Container>
      <Navbar name={props.name} account={props.account} func={props.func}/>
      <Announcement />
      {/* <Title></Title> */}
      <Clothing>
        <TypeContainer>
          <Button onClick={ () =>handleChange("Tops") }>
            Tops
          </Button>
          <Button onClick={ () =>handleChange("Dresses") }>
            Dresses
          </Button>
          <Button onClick={ () =>handleChange("Jackets") }>
            Jackets
          </Button>
        </TypeContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select  onChange={(event) => handleSort(event)}>
              <Option value="nor">Recommended</Option>
              <Option value="low" >Price (Low to High) </Option>
              <Option value="high" >Price (High to low)</Option>
            </Select>
        </Filter>
      </Clothing>
      <Products Data={Data} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Women;