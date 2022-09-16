import { CardHeader, CardWrapper, CartWrapper, MiniHeader } from './StyledComponents';
import { useContext, useState } from 'react';



export default function Cart(props) {

    const [ cartItems, setCartItems ] = useState(JSON.parse(localStorage.getItem('CART_ITEMS')));

    return (
        <>

            <MiniHeader style={{ position: 'absolute', marginTop: '100px' }}>Your Cart</MiniHeader>

            {/* <CartWrapper>
                
            {cartItems.length > 0 ? (
                  cartItems.map( (item) => (
                    <div class="d-flex flex-column align-items-center h-100 justify-content-evenly">
                    
                        <CardHeader>{item.id}</CardHeader>
                    </div>
                  ))

                )
                :
                (
                  <MiniHeader>
                    Cart is EMPTY!!
                  </MiniHeader>
                )}


            </CartWrapper> */}

        </>
    );
};