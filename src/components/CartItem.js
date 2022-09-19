import { ProductImage, CartHeader, CartItemContainer, CartButton } from "./StyledComponents";
import { useState, useContext } from "react";
import TruncateMarkup from "react-truncate-markup";
import ProductModal from "./ProductModal";
import { CartContext } from "../contexts/Cart/CartContext";
import { useEffect } from "react";
import { getSuggestedQuery } from "@testing-library/react";

export default function CartItem(props) {

    const { cartItems, setCartItems } = useContext(CartContext)

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ isModalLoading, setIsModalLoading ] = useState(false);

    const [ currentQty, setCurrentQty ] = useState(0);

    const { id, title, description, category, price, image, quantity } = props;

    const itemTotal = (price * quantity).toFixed(2);

    const IncrementItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        const found = cartList.find( (obj, ind) => {
            if (obj.id === itemId) {
                cartList[ind] = {id: itemId, quantity: obj.quantity+1};
                const updatedList = cartList;
                setCartItems(updatedList);
                return true;
            } else return false;
        });
    };

    const RemoveItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        console.log('Cartlist before splice: ', cartList);
        const found = cartList.find( (obj, ind) => {
            if (obj.id === itemId) {
                console.log('Index: ', ind);
                cartList.splice(ind, 1);
                console.log('Cartlist after splice: ', cartList);
                const updatedList = cartList;
                console.log('Updated Cart List: ', updatedList);
                setCartItems(updatedList);
                window.location.reload();
                return true;
            };
        });
    };

    const DecrementItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        const found = cartList.find( (obj, ind) => {
            if (obj.id === itemId) {
                if (obj.quantity === 1){
                    RemoveItem(itemId);
                } else {
                    cartList[ind] = {id: itemId, quantity: obj.quantity-1}
                    const updatedList = cartList;
                    setCartItems(updatedList);
                    return true;
                }
            } else return false;
        })
    };

    const ViewProductClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    useEffect( () => {
       
    }, [cartItems]);

    return(
    <>
            <CartItemContainer>
            <div class="row border border-solid rounded w-100 p-2">
                <div class="col-12 col-md-6 d-flex flex-column align-items-center" onClick={ViewProductClick} style={{ cursor: 'pointer', boxShadow: '3px 3px 2px lightgray' }}>
                    <ProductImage style={{ margin: '10px', padding: '5px' }} src={image} alt={title}></ProductImage>
                    <CartHeader style={{ fontSize: '18px', maxWidth: '400px'}}>{title}</CartHeader>
                    <TruncateMarkup lines={3}>
                        <div style={{ maxWidth: '400px', marginBottom: '30px' }}>{description}</div>
                    </TruncateMarkup>
                </div>
                <div class="row col-12 col-md-6">
                    <div class="col-12 col-md-6" style={{ minHeight:'200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <CartHeader>Price: ${price.toFixed(2)}</CartHeader>
                        <CartHeader>
                            Qty: 
                            <CartButton onClick={() => DecrementItem(id)}>-</CartButton>
                            {quantity}
                            <CartButton onClick={() => IncrementItem(id)}>+</CartButton>
                        </CartHeader>
                        <CartHeader>Subtotal: ${itemTotal}</CartHeader>
                    </div>
                    <div class="col-12 col-md-6" style={{ minHeight:'200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <CartHeader onClick={() => RemoveItem(id)} style={{ color: 'darkred', cursor: 'pointer' }}>Remove from cart </CartHeader>
                    </div>
                </div>
            </div>

            </CartItemContainer>
        <div class="">

        </div>

        <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} quantity={quantity} setIsModalOpen={setIsModalOpen} />
    </>
    );
};