import { CardWrapper, CardHeader, ProductImage, CardButton } from "./StyledComponents";
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/Cart/CartContext';
import LazyLoad from 'react-lazy-load';
import ProductModal from './ProductModal';

export default function ProductCard(props) {

    const { product, category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { cartItems, setCartItems } = useContext(CartContext);

    const AddToCart = (itemId) => {
        const prevCart = JSON.parse(localStorage.getItem('CART_ITEMS'));
        setCartItems([...prevCart, {id: itemId}]);
    };

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
                    
                    <CardButton onClick={() => AddToCart(id)}>
                        ADD TO CART
                    </CardButton>
                </div>
            </CardWrapper>

            <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};