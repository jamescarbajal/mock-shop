import { ShopContainer } from './StyledComponents';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import SearchForm from './SearchForm';
import { CardContainer, MiniHeader } from './StyledComponents';
import ProductCard from './ProductCard';


export default function Shop(props) {

  const [productList, setProductList] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  
  const getAllProducts = async () => {
      setIsLoading(true);
      const url = 'https://fakestoreapi.com/products'
      const response = await fetch(url);
      const data = await response.json();
      console.log('Product Data: ', data);
      setProductList(data);
      setIsLoading(false);
  };


  useEffect( () => {
     getAllProducts();
  }, []);


  return(
      <>
          <SearchForm />

          <div>
            {!isLoading ? (
              <CardContainer>
                {productList.length > 0 ? (
                  productList.map( (product) => (
                    <ProductCard id={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} />
                  ))

                )
                :
                (
                  <MiniHeader>
                    No results found.
                  </MiniHeader>
                )}
              </CardContainer>
            )
            :
            (
              <MiniHeader class="container-fluid text-center border" style={{ color: "blue" }}>
                Loading...
              </MiniHeader>
            )}
          </div>   

      </>
    );
}