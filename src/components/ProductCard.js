import { CardWrapper } from "./StyledComponents";
import { CardHeader, ProductImage } from "./StyledComponents";

export default function ProductCard(props) {

    const { category, description, id, image, price, rating, count, title } = props;

    return(
        <>
            <CardWrapper>
                <div style={{ overflow: 'hidden' }}>
                    <ProductImage src={image}></ProductImage>
                </div>
                <CardHeader>{title}</CardHeader>
            </CardWrapper>

        </>
    );
};