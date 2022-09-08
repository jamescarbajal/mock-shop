import ReactModal from 'react-modal';
import { CartModalWrapper } from './StyledComponents';
import { useContext } from 'react';
import CartContext from '../contexts/Cart/CartContext';


export default function CartModal(props) {

    const { isCartOpen } = props;

    const { cartItems } = useContext(CartContext);

    return (

        <ReactModal style={{ overlay: { top: '45px', left: '', border: 'none', height: '500px', width: '325px', background: 'none', zIndex: '1' } }} isOpen={isCartOpen}>
            <CartModalWrapper>
                <div>
                {cartItems.length > 0 ? (
                  cartItems.map( (product) => (
                    <div product={product} id={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} />
                  ))

                )
                :
                (
                  <div>
                    Cart is empty!
                  </div>
                )}
              </div>
            </CartModalWrapper>
        </ReactModal>


    );
};