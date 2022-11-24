// import {  ArrowLeftOutlined, ArrowRightAltOutlined } from "@material-ui/icons"

import { useState } from 'react';
import { FaRegCaretSquareLeft,FaRegCaretSquareRight} from 'react-icons/fa';
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height:100vh;
    display:flex;
    margin-top:20px;
    // background-color: coral;
    position:relative;
    overflow:hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color:#fff;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity: 0.5;
`;const Wrapper = styled.div`
    height: 100%;
    display:flex;
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${(props) => props.bg};

`
const ImgContainer = styled.div`
height:80%
heigth:100%;
 flex:1;

`
const Image =styled.img`
    height:80%;

`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
font-size: 70px;

`
const Desc = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color: transparent;
cursor:pointer;

`

const Slider = () => {
    const [slideIndex, setSlide] = useState

    const handleClick  = (direction) => {}; 
  return (
   <Container>
   <Arrow direction="left" onClick={()=>handleClick("left")}>
   <FaRegCaretSquareLeft/>
   </Arrow>
   <Wrapper>
   <Slide bg="f5faf4">
   <ImgContainer>
   <Image src='https://www.shutterstock.com/image-photo/lady-evening-dress-elegant-woman-600w-1011793372.jpg'/>
   </ImgContainer>
   <InfoContainer>
   <Title>WINTER SALE</Title>
   <Desc>DONT COMPARE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Desc>
   <Button>SHOP NOW</Button>

   
   </InfoContainer>
   </Slide>
   <Slide bg="fcf1ed">
   <ImgContainer>
   <Image src='https://www.shutterstock.com/image-photo/lady-evening-dress-elegant-woman-600w-1011793372.jpg'/>
   </ImgContainer>
   <InfoContainer>
   <Title>POPULAR SALE</Title>
   <Desc>DONT COMPARE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Desc>
   <Button>SHOP NOW</Button>

   
   </InfoContainer>
   </Slide>
   <Slide bg="fbf0f4">
   <ImgContainer>
   <Image src='https://www.shutterstock.com/image-photo/lady-evening-dress-elegant-woman-600w-1011793372.jpg'/>
   </ImgContainer>
   <InfoContainer>
   <Title>SUMMER  SALE</Title>
   <Desc>DONT COMPARE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Desc>
   <Button>SHOP NOW</Button>

   
   </InfoContainer>
   </Slide>

   </Wrapper>
   <Arrow direction="right" onClick={()=>handleClick("left")}>
   <FaRegCaretSquareRight/>
   </Arrow>
   </Container>
  )
}

export default Slider