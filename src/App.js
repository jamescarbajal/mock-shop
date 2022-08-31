import './App.css';
import Home from './components/Home';
import { ThemeProvider} from './contexts/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import HeaderFooter from './components/HeaderFooter';
import NotFound from './components/NotFound';
import Shop from './components/Shop';


function App() {
  return (
    <ThemeProvider>
      <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element = {<HeaderFooter />}>
                <Route index element = {<Home />} />
                <Route exact path="/shop" element={<Shop />} />
                {/* <Route path="/Login" element = {<Login />} />
                <Route path="#" element = {
                  <AuthChecker>
                    <# />
                  </AuthChecker>
                } /> */}
                <Route path="*" element = {<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
