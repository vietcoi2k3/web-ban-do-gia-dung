import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              <h1 style={{ margin: 0, fontSize: '24px' }}>Shop Bán Hàng</h1>
            </Link>
            <nav>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', marginLeft: '16px' }}>Trang chủ</Link>
            </nav>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        
        <footer style={{
          backgroundColor: '#f3f4f6',
          padding: '24px 16px',
          marginTop: '48px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#4b5563'
          }}>
            <p>© 2024 Shop Bán Hàng. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 