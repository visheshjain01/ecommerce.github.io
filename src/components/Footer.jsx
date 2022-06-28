import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

  const Container = styled.div`
    display: flex;
    background-color: #f7ecf2;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const Social = styled.div`
    display: flex;
  `
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    margin-left: 130px;
  `;
  
  const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 140px;
  `;
  
  const ListItem = styled.button`
    height: 20px;
    font-size: 17px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #f7ecf2;
    &:hover{
      color: blue;
    }
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
    width: 250px;
    margin-left: 100px;
    margin-top: 30px;
  `;

  const Heading = styled.h3`
    margin-bottom: 20px;
  `
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Vishesh.</Logo>
          <Desc>
          If you would like to experience the best of online shopping for men, women in India, you are at the right place.
          xyz is the ultimate destination for fashion and lifestyle, being host to a wide array of clothing products. 
          It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. 
          You can shop online at xyz from the comfort of your home and get your favourites delivered right to your doorstep.
          </Desc>
          <SocialContainer>
            <Heading>Keep in touch</Heading>
            <Social>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
              <SocialIcon color="E60023">
                <Pinterest />
              </SocialIcon>
            </Social>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <Link to="/"><ListItem>Home</ListItem></Link>
            <Link to="/cart"><ListItem>Cart</ListItem></Link>
            <Link to="/wishlisttt"><ListItem>Wishlist</ListItem></Link>
            <Link to="/products"><ListItem>Man fashion</ListItem></Link>
            <Link to="/women"><ListItem>Woman fashion</ListItem></Link>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px",marginBottom:"50px"}}/> xyz Internet Private Limited, Buildings Alyssa, Begonia and Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru 560103, Karnataka, India
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 7892036548
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> xyz@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;