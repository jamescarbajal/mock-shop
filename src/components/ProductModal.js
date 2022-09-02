import ReactModal from 'react-modal';
import { ModalWrapper, ModalCloseButton, ModalImage } from './StyledComponents';

export default function ProductModal(props) {

    const { isModalOpen, setIsModalOpen, isModalLoading, setIsModalLoading, category, description, id, image, price, title} = props;

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
            <ReactModal isOpen={isModalOpen}>
                <ModalWrapper>
                        <ModalImage src={image}></ModalImage>
                        <div class="mt-3">{title}</div>
                        <div class="my-4">{description}</div>
                        <div class="d-flex flex-row w-100 justify-content-between">
                            <div>Product ID: {id}</div>
                            <div>Category: {category}</div>
                        </div>
                        <ModalCloseButton onClick={handleCloseModal}>x</ModalCloseButton>
                </ModalWrapper>
            </ReactModal>

    );
};