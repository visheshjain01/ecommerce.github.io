import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container=styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://images.pexels.com/photos/12332430/pexels-photo-12332430.jpeg");
    background-size: cover;
    background-position-y: center;

`
const Wrapper=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`
const Div=styled.div`
    height: 50%;
    display: flex;
    align-items:center;
    margin-top: 100px;
`

const Button = styled.button`
    font-size: 20px;
    margin: 30px;
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
`
const Img = styled.img`
    height: 350px;
    position: absolute;
    top: 60px;
    left: 60px;
    z-index: 2;

`

const Photo = () => {
  return (
    <Container>
        <Wrapper>
            <Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fashionquote18-1624393499.jpg?crop=1xw:1xh;center,top&resize=980:*"></Img>
            <Div>
                <Link to="/products"><Button>SHOP MEN</Button></Link> 
                <Link to="/women"><Button>SHOP WOMEN</Button></Link>
            </Div>
        </Wrapper>
    </Container>
  )
}

export default Photo