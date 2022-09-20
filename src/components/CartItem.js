import { ProductImage, CartHeader, CartItemContainer, CartButton, CartImage } from "./StyledComponents";
import { useState, useContext } from "react";
import TruncateMarkup from "react-truncate-markup";
import ProductModal from "./ProductModal";
import { CartContext } from "../contexts/Cart/CartContext";
import { useEffect } from "react";

export default function CartItem(props) {

    const { cartItems, setCartItems } = useContext(CartContext)

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ isModalLoading, setIsModalLoading ] = useState(false);

    const { id, title, description, category, price, image, quantity } = props;

    const [ currentQty, setCurrentQty ] = useState(quantity);

    const [ itemSubtotal, setItemSubtotal ] = useState(price * currentQty);

    const IncrementItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        const found = cartList.find( (obj, ind) => {
            if (obj.id === itemId) {
                cartList[ind] = {id: itemId, quantity: obj.quantity+1};
                setCurrentQty(cartList[ind].quantity);
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
                    setCurrentQty(cartList[ind].quantity);
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
        setItemSubtotal(price * currentQty);
    }, [cartItems]);

    return(
    <div class="mx-auto" style={{ width: '90%', padding: '5px' }}>
            <CartItemContainer>
                <div class="col-12 col-md-3 d-flex justify-content-center" onClick={ViewProductClick} style={{ cursor: 'pointer' }}>
                <CartImage src={image} alt={title}></CartImage>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column">
                    <CartHeader>
                        {title}
                    </CartHeader>
                    <div class="mx-auto px-5" style={{ maxWidth: '500px' }}>
                        <TruncateMarkup lines={3} >
                            <div>{description}</div>
                        </TruncateMarkup>
                    </div>
                </div>
                

                <div class="col-12 col-md-5">
                    <div class="row mx-5">
                        <div class="col d-flex flex-column justify-items-center align-items-center">
                        <CartHeader>Price: ${price.toFixed(2)}</CartHeader>
                            <CartHeader>
                                Qty: 
                                <CartButton onClick={() => DecrementItem(id)}>-</CartButton>
                                    {currentQty}
                                <CartButton onClick={() => IncrementItem(id)}>+</CartButton>
                            </CartHeader>
                        </div>
                        <div class="col d-flex flex-column justify-contents-center align-items-center">
                        <CartHeader>Subtotal: ${itemSubtotal.toFixed(2)}</CartHeader>
                        <CartHeader onClick={() => RemoveItem(id)} style={{ color: 'darkred', cursor: 'pointer', fontSize: '12px', marginTop: '-10px' }}>Remove </CartHeader>
                        </div>
                    </div>
                </div>
            </CartItemContainer>


        <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} quantity={quantity} setIsModalOpen={setIsModalOpen} />
    </div>
    );
};