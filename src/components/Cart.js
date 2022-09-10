import { CartWrapper, MiniHeader } from './StyledComponents';
import { useContext } from 'react';



export default function Cart(props) {

    const { isCartOpen } = props;

    return (
        <>

            <MiniHeader style={{ position: 'absolute', marginTop: '100px' }}>Your Cart</MiniHeader>

            <CartWrapper>
                
            </CartWrapper>

        </>
    );
};