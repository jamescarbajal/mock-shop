import { ProductImage, CartHeader, CartItemContainer, CartDetail, CartDescription } from "./StyledComponents";
import { useState, useEffect } from "react";

export default function CartItem(props) {

    const [ currentItem, setCurrentItem ] = useState();

    const { id, title, description, category, price, image } = props;

    return(
    <>
        <div class="col-12 col-md-8">
            <CartItemContainer>
                <ProductImage src={image} alt={title}></ProductImage>
                <CartHeader>{title}</CartHeader>
                <CartDescription>{description}</CartDescription>
                <CartDetail>${price}</CartDetail>
            </CartItemContainer>
        </div>
        <div class="col-12 col-md-8">

        </div>
    </>
    );
};