import { CardWrapper } from "./StyledComponents";
import { CardHeader, ProductImage } from "./StyledComponents";
import { useState } from 'react';
import ModalCard from './ProductModal';
import ProductModal from "./ProductModal";

export default function ProductCard(props) {

    const { category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);



    return(
        <>
            <CardWrapper>
                <div style={{ overflow: 'hidden' }}>
                    <ProductImage src={image}></ProductImage>
                </div>
                <CardHeader>{title}</CardHeader>
            </CardWrapper>

            <ProductModal category={category} description={description} id={id} image={image} price={price} rating={rating} count={count} titel={title} />
        </>
    );
};