import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Cart, Home, Login, Register } from './pages';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<Home />} />
                        <Route path="/women" element={<Home />} />
                        <Route path="/men" element={<Home />} />
                        <Route path="/kids" element={<Home />} />
                        <Route path="/baby" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
