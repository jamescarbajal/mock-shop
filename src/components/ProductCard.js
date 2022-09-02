import { CardWrapper } from "./StyledComponents";
import { CardHeader, ProductImage } from "./StyledComponents";
import { useState } from 'react';
import ProductModal from './ProductModal';

export default function ProductCard(props) {

    const { category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const CardWrapperClicked = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };


    return(
        <>
            <CardWrapper onClick={CardWrapperClicked}>
                <ProductImage src={image}></ProductImage>
                <CardHeader>{title}</CardHeader>
            </CardWrapper>

            <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};