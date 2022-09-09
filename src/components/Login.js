import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import LabeledTextInput from './LabeledTextInput';
import { LoginContainer, MiniHeader, StyledButton } from './StyledComponents';

const testUser = {
    id: 1,
    username: 'jamescarbajal',
    email: 'james@email.com',
    password: 'password',
};


export default function Login() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const [ email, setEmail ] = useState("");

    const [ password, setPassword ] = useState("");

    const [ showLoginError, setShowLoginError ] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.prevenDefault();
        if (email === testUser.email && password === testUser.password) {
            setLoggedInUser(testUser);
            navigate('/Shop');
        } else {
            setShowLoginError(true);
        }
    };

    return (

        <LoginContainer>

            <MiniHeader>Login</MiniHeader>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <LabeledTextInput 
                    name="Email" 
                    value={email} 
                    setValue={setEmail} 
                />
                <LabeledTextInput 
                    name="Password" 
                    value={password} 
                    setValue={setPassword} 
                    inputType="password"
                />
                
                <StyledButton type="submit">Login</StyledButton>
            </form>
            {showLoginError && <div>Invalid email or password.</div>}

        </LoginContainer>

    );
};