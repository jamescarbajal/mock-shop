import { CardWrapper } from "./StyledComponents";
import { CardHeader, ProductImage, CardButton } from "./StyledComponents";
import { useState } from 'react';
import ProductModal from './ProductModal';

export default function ProductCard(props) {

    const { category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const ViewProductClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };


    return(
        <>
            <CardWrapper>
                <ProductImage src={image}></ProductImage>
                <CardHeader>{title}</CardHeader>
                <div class="mt-2 d-flex flex-row justify-content-between w-100">
                    <CardButton onClick={ViewProductClick}>VIEW</CardButton>
                    <CardButton>ADD TO CART</CardButton>
                </div>
            </CardWrapper>

            <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};