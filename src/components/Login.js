import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import ReactModal from 'react-modal';
import { ModalWrapper } from './StyledComponents';


export default function Login() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    return (

        <>

            <div>Login page</div>

            <form onSubmit={handleSubmit}>
                <LabeledTextInput name="Email" value={email} setValue={setEmail} />
                <LabeledTextInput 
                    name="Password" 
                    value={password} 
                    setValue={setPassword} 
                    inputType="password"
                />
                <button primary type="submit">
                    Login
                </button>
            </form>
            {showLoginError && <div>Invalid email or password.</div>}

        </>

    );
};