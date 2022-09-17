import { CardWrapper, CardHeader, ProductImage, CardButton } from "./StyledComponents";
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/Cart/CartContext';
import LazyLoad from 'react-lazy-load';
import ProductModal from './ProductModal';

export default function ProductCard(props) {

    const { product, category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { cartItems, setCartItems } = useContext(CartContext);

    function checkCart(currentCart, selectedId){
        for(const e of currentCart){
            if (e.id === selectedId){
                console.log(e.id);
                return e.id;
            } else return false;
        }
    }

    const AddToCart = (selectedId) => {
        const currentCart = JSON.parse(localStorage.getItem('CART_ITEMS'));
        const check = checkCart(selectedId);
        console.log('Check result: ', check);
        if (!check) {
            setCartItems([...currentCart, {id: selectedId, quantity: 1}]);
        } else {
            setCartItems(currentCart => [...currentCart.]);
        }
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