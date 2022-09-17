import { CardWrapper, ProductImage, CardHeader } from "./StyledComponents";
import { useState, useEffect } from "react";

export default function CartItem(props) {

    const [ currentItem, setCurrentItem ] = useState();

    const { id, title, description, category, price, image } = props;

    return(
    <>
            <div styel={{ width: '400px', height: '600px' }} class="d-flex flex-column align-items-center h-100 w-100 my-3 justify-content-evenly">
                <CardHeader>{id}</CardHeader>
                <ProductImage src={image} alt={title}></ProductImage>
                <CardHeader>{title}</CardHeader>
                <CardHeader style={{ width: '400px', textAlign: 'left' }}>{description}</CardHeader>
                <CardHeader>{category}</CardHeader>
                <CardHeader>{price}</CardHeader>
            </div>
    </>
    );
};