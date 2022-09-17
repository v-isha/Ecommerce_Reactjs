import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";

// const Container = styled.div`
//       height:50px;
//       background-color:black;
// `
const Container = styled.div`
  height: 60px;
  background-color:#E9D5DA; 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 300;
  color:#16213E;
  font-size:30px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;


const Navbar = () => {
  return (
    <Container>
            <Wrapper>
                        <Left>
                          <Logo >MONKEYKEEN</Logo>
                        </Left>
                        <Center>
                          
                        </Center>
                        <Right>
                          <MenuItem>REGISTER</MenuItem>
                          <MenuItem>SIGN IN</MenuItem>
                          <MenuItem>
                            <Badge badgeContent={4} color="primary">
                              <AddShoppingCartIcon/>
                            </Badge>
                          </MenuItem>
                        </Right>    
              </Wrapper>
    </Container>
  )
}

export default Navbar