import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ProductList from './components/ProductList';
import { Suspense, lazy } from 'react';

const Cart = lazy(() => import('./components/Cart'));
const ProductForm = lazy(() => import('./components/ProductForm'));
const Default = lazy(() => import('./components/Default'));
const ProductDetail = lazy(() => import('./components/Detail'));


function App() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >NetApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/new_products">New Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/new_products" element={<ProductForm />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/details/:id" element={<ProductDetail />}></Route>
              <Route path="/" element={<ProductList />}></Route>
              <Route path="*" element={<Default />}></Route>
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
