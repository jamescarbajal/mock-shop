import ReactModal from 'react-modal';
import { CartModalWrapper, ModalCloseButton } from './StyledComponents';



export default function CartModal(props) {

    const { isCartOpen, setIsCartOpen } = props;

    return (

        <ReactModal style={{ overlay: { top: '45px', left: '', border: 'none', height: '500px', width: '325px', background: 'none', zIndex: '1' } }} isOpen={isCartOpen}>
            <CartModalWrapper>
                Hello!!
            </CartModalWrapper>
        </ReactModal>


    );
};