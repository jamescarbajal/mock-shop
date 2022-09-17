import { CardHeader, CardWrapper, CartWrapper, MiniHeader } from './StyledComponents';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../contexts/Cart/CartContext';



export default function Cart(props) {

  const { cartItems, setCartItems } = useContext(CartContext);

  const [ isLoading, setIsLoading ] = useState(false);

  const [ currentCartData, setCurrentCartData ] = useState([]);

    async function getItemInfo(e) {
      const cartItems = (e);
      console.log('Cart Items: ', cartItems);
      for ( const item of cartItems) {
        const id = item.id;
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data: ', data);
        setCurrentCartData(currentCartData => [...currentCartData, data]);
      }
  };

  useEffect( async () => {
    setIsLoading(true);
    await getItemInfo(cartItems);
    setIsLoading(false);
  }, []);

  console.log('Finished data: ', currentCartData);

    return (
        <>

            <MiniHeader style={{ position: 'absolute', marginTop: '100px' }}>Your Cart</MiniHeader>

            {isLoading ? (

              <MiniHeader>Loading...</MiniHeader>

            ):(
              <CartWrapper>
                {currentCartData.length > 0 ? (

                  currentCartData.map( (item) => (

                    <CartItem id={item.id} title={item.title} description={item.description} image={item.image} category={item.category} price={item.price}/>
                  ))

                ):(
                  
                  <MiniHeader>
                    Cart is EMPTY!!
                  </MiniHeader>
                  
                )}
              </CartWrapper>
            )}

        </>
    );
};