import { CardWrapper, CardHeader, ProductImage, CardButton } from "./StyledComponents";
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/Cart/CartContext';
import LazyLoad from 'react-lazy-load';
import ProductModal from './ProductModal';

export default function ProductCard(props) {

    const { product, category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { cartItems, setCartItems } = useContext(CartContext);

    const [isItemInCart, setIsItemInCart] = useState(false);

    const AddToCart = (itemId) => {
        const currentCart = JSON.parse(localStorage.getItem('CART_ITEMS'));
        setCartItems([...currentCart, {id: itemId, quantity: 1}]);
    };

    const IncrementItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        cartList.map( (obj) => {
            if (obj.id === itemId) setCartItems({...obj, quantity: obj.quantity++});
        });
    };

    const checkCart = (itemId) => {
        setIsItemInCart(false);
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        cartList.map( (obj) => {
            if (obj.id === itemId) {
                setIsItemInCart(true);
                return;
            };
        })
    };

    console.log('Check Cart Result: ', checkCart(id));

    const ViewProductClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    
    return(
        <>
            <CardWrapper>
                <div class="d-flex flex-column align-items-center h-100 justify-content-evenly">
                    <LazyLoad>
                        <ProductImage src={image} alt={title}></ProductImage>
                    </LazyLoad>
                    <CardHeader>{title}</CardHeader>
                </div>
                <div class="d-flex flex-row justify-content-between w-100 mt-3">
                    <CardButton onClick={ViewProductClick}>
                        VIEW
                    </CardButton>

                {true ? (
                    <>
                        <CardButton style={{ border: '1px solid orange' }} onClick={() => IncrementItem(id)}>
                            JUST ONE MORE
                        </CardButton>
                    </>
                ):(
                    <>
                        <CardButton onClick={() => AddToCart(id)}>
                            ADD TO CART
                        </CardButton>
                    </>
                )}
                
                </div>
            </CardWrapper>

            <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};