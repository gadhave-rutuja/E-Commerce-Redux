import React,{useState} from 'react'

import CommonSection from '../Componests/UI/CommonSection'
import Helmet from '../Componests/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../Style/shop.css'

import products from '../assets/data/products'
import ProductLists from '../Componests/UI/ProductList'

const Shop = () => {

const [productsData, setProductsData]=useState(products)

const handleFilter =e =>{
  const filtervalue  = e.target.value

  if(filtervalue =='sofa'){
    const filteredProducts = products.filter(item =>item.category =='sofa');
    setProductsData(filteredProducts);
  }

  if(filtervalue =='mobile'){
    const filteredProducts = products.filter(item =>item.category =='mobile');
    setProductsData(filteredProducts);
  }

  if(filtervalue =='chair'){
    const filteredProducts = products.filter(item =>item.category =='chair');
    setProductsData(filteredProducts);
  }

  if(filtervalue =='watch'){
    const filteredProducts = products.filter(item =>item.category =='watch');
    setProductsData(filteredProducts);
  }

  if(filtervalue =='wireless'){
    const filteredProducts = products.filter(item =>item.category =='wireless');
    setProductsData(filteredProducts);
  }





}

const handleSearch= e=>{
  const SearchTerm =e.target.value

  const SearchedProducts = products.filter(item=>item.productName.toLowerCase().includes(SearchTerm.toLowerCase()))

  setProductsData(SearchedProducts)
}

  return <Helmet title='Shop'>

    <CommonSection title='Products'/>


    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
          <div className="filter_widget">
            <select name="" id="" onChange={handleFilter}>
              <option>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className="filter_widget">
            <select name="" id="">
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          </Col>
          <Col lg='6' md='12'>
          <div className="searh_box">
            <input type="text" placeholder='Search Here.....' onChange={handleSearch}/>
            <span><i class="ri-search-line"></i></span>
          </div>
          </Col>
        </Row>
      </Container>

    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length == 0? <h1 className='text-center fs-4'>No Products are found!</h1> : <ProductLists data={productsData}/>
          }
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Shop