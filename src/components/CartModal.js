import ReactModal from 'react-modal';
import { CartModalWrapper } from './StyledComponents';
import { useContext } from 'react';



export default function CartModal(props) {

    const { isCartOpen } = props;

    return (

        <ReactModal style={{ overlay: { top: '45px', left: '', border: 'none', height: '500px', width: '325px', background: 'none', zIndex: '1' } }} isOpen={isCartOpen}>
            <CartModalWrapper>
                Cart is empty
            </CartModalWrapper>
        </ReactModal>


    );
};