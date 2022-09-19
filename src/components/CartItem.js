import { ProductImage, CartHeader, CartItemContainer, CartDetail, CartDescription } from "./StyledComponents";
import { useState, useEffect } from "react";

export default function CartItem(props) {

    const [ currentItem, setCurrentItem ] = useState();

    const { id, title, description, category, price, image, quantity } = props;

    return(
    <>
        <div class="col-12 col-md-8">
            <CartItemContainer>
                <ProductImage style={{ maxHeight: '250px', padding: '5px' }} src={image} alt={title}></ProductImage>
                <CartHeader style={{ fontSize: '18px'}}>{title}</CartHeader>
                <CartDescription>{description}</CartDescription>

                <div style={{ minHeight:'200px', width: 'fit-content', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <CartHeader>${price}</CartHeader>
                    <CartHeader>Qty: {quantity}</CartHeader>
                </div>
            </CartItemContainer>
        </div>
        <div class="col-12 col-md-8">

        </div>
    </>
    );
};