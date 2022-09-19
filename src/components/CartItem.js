import { ProductImage, CartHeader, CartItemContainer, CartDescription } from "./StyledComponents";
import { useState } from "react";
import TruncateMarkup from "react-truncate-markup";
import ProductModal from "./ProductModal";
import Cart from "./Cart";

export default function CartItem(props) {

    const [ currentItem, setCurrentItem ] = useState();

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ isModalLoading, setIsModalLoading ] = useState(false);

    const { id, title, description, category, price, image, quantity } = props;

    const itemTotal = (price * quantity).toFixed(2);

    const ViewProductClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return(
    <>
            <CartItemContainer>
            <div class="row border border-solid rounded w-100 p-2">
                <div class="col-12 col-md-6 d-flex flex-column align-items-center" onClick={ViewProductClick} style={{ cursor: 'pointer', boxShadow: '3px 3px 2px lightgray' }}>
                    <ProductImage style={{ margin: '10px', padding: '5px' }} src={image} alt={title}></ProductImage>
                    <CartHeader style={{ fontSize: '18px'}}>{title}</CartHeader>
                    <TruncateMarkup lines={3}>
                        <div style={{ maxWidth: '400px', marginBottom: '30px' }}>{description}</div>
                    </TruncateMarkup>
                </div>
                <div class="row col-12 col-md-6">
                    <div class="col-12 col-md-6" style={{ minHeight:'200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <CartHeader>Price: ${price}</CartHeader>
                        <CartHeader>Qty: {quantity}</CartHeader>
                        <CartHeader>Subtotal: ${itemTotal}</CartHeader>
                    </div>
                    <div class="col-12 col-md-6" style={{ minHeight:'200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <CartHeader></CartHeader>
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