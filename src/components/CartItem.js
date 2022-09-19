import { ProductImage, CartHeader, CartItemContainer, CartDetail, CartDescription } from "./StyledComponents";
import { useState, useEffect } from "react";

export default function CartItem(props) {

    const [ currentItem, setCurrentItem ] = useState();

    const { id, title, description, category, price, image, quantity } = props;

    return(
    <>
            <CartItemContainer>
            <div class="row border border-solid rounded w-100">
                <div class="col-12 col-md-6 d-flex flex-column align-items-center">
                    <ProductImage style={{ margin: '10px', padding: '5px' }} src={image} alt={title}></ProductImage>
                    <CartHeader style={{ fontSize: '18px'}}>{title}</CartHeader>
                    <CartDescription>{description}</CartDescription>
                </div>
                <div class="col-12 col-md-6" style={{ minHeight:'200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <CartHeader>${price}</CartHeader>
                    <CartHeader>Qty: {quantity}</CartHeader>
                </div>
            </div>

            </CartItemContainer>
        <div class="">

        </div>
    </>
    );
};