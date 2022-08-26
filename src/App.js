import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ThemeProvider} from './contexts/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';


function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element = {<HeaderFooter />}> */}
              <Route index element = {<Home />} />
              {/* <Route path="/Login" element = {<Login />} />
              <Route path="#" element = {
                <AuthChecker>
                  <# />
                </AuthChecker>
              } /> */}
              {/* <Route path="*" element = {<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
