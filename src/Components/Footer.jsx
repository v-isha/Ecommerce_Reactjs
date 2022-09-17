import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import styled from "styled-components";






const Container = styled.div`
  display: flex;

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
`;

const SocialContainer = styled.div`
  display: flex;
`;

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
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
    <Left>
      <Logo>MonkeyKeen</Logo>
      <Desc>
        Our moto customer is God.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <FacebookIcon/>
        </SocialIcon>
        <SocialIcon color="E4405F">
          <InstagramIcon/>
        </SocialIcon>
       </SocialContainer>
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem>
        <AddLocationIcon     style={{marginRight:"10px"}}/> 70 Jeevan Park , NewDelhi INDIA
      </ContactItem>
      <ContactItem>
        <PhoneIphoneIcon style={{marginRight:"10px"}}/> +91 999-06-11-334
      </ContactItem>
      <ContactItem>
        <MailOutlineIcon style={{marginRight:"10px"}} /> vshlkmr81@gmail.com
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
  </Container>
  )
}

export default Footer