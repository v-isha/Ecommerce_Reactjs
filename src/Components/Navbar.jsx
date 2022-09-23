import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {mobile} from '../Responsive.js'
// import {Link} from "react-router-dom";
const Container = styled.div`
  height: 60px;
  background-color:#E9D5DA;
  ${mobile({ height:"50px", background:"pink"  })}
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
  ${mobile({ display:"none"  })}
`;

const Logo = styled.h1`
  font-weight: 300;
  color:#16213E;
  font-size:30px;
  ${mobile({fontSize: "20px"  })}
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
  ${mobile({fontSize: "10px"  })}
  
`;


const Navbar = () => {
  return (
    <Container>
            <Wrapper>
                        <Left>
                          {/* <Link to="/"> <Logo >MONKEYKEEN</Logo></Link> */}
                          <Logo >MONKEYKEEN</Logo>
                         
                        </Left>
                        <Center>
                          
                        </Center>
                        <Right>
                          {/* <Link to="/register"><MenuItem>REGISTER</MenuItem></Link> */}
                          <MenuItem>REGISTER</MenuItem>
                          <MenuItem>SIGN IN</MenuItem>
                          
                          <MenuItem>
                            <Badge badgeContent={4} color="primary">
                              <AddShoppingCartIcon />
                            </Badge>
                          </MenuItem>
                          
                        </Right>    
              </Wrapper>
    </Container>
  )
}

export default Navbar