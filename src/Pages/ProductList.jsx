import React from 'react'
import styled from "styled-components";
import Navbar from '../Components/Navbar.jsx'
import Products from '../Components/Products.jsx'
import Newsletter from '../Components/Newsletter.jsx'
import Footer from '../Components/Footer.jsx'



const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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


const ProductList = () => {
  return (
    <Container>
    <Navbar/>
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select>
          <Option disabled selected>
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select>
          <Option disabled selected>
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
          <Option selected>Newest</Option>
          <Option>Price (asc)</Option>
          <Option>Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
  </Container>
  )
}

export default ProductList