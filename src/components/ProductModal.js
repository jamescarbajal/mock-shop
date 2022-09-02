import ReactModal from 'react-modal';
import { ModalWrapper, CloseModalButton } from './StyledComponents';

export default function ProductModal(props) {

    const { isModalOpen, setIsModalOpen, isModalLoading, setIsModalLoading, category, description, id, image, price, title} = props;

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
            <ReactModal isOpen={isModalOpen}>
                <ModalWrapper>
                        <div><img src={image}></img></div>
                        <div>{title}</div>
                        <div>{description}</div>
                        <div>{id}</div>
                        <div>{category}</div>
                        <CloseModalButton onClick={handleCloseModal}>X</CloseModalButton>
                </ModalWrapper>
            </ReactModal>

    );
};