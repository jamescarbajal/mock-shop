import { ShopContainer } from './StyledComponents';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import SearchForm from './SearchForm';


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
      
        <ShopContainer>
          <SearchForm />
        </ShopContainer>     

      </>
    );
}