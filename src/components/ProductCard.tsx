import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, description }) => {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{ position: 'relative', height: '200px', width: '100%' }}>
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ padding: '16px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 600, 
            color: '#1f2937',
            margin: 0
          }}>{name}</h3>
          <p style={{ 
            fontSize: '14px', 
            color: '#4b5563', 
            marginTop: '4px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>{description}</p>
          <p style={{ 
            color: '#2563eb', 
            fontWeight: 'bold', 
            marginTop: '8px',
            marginBottom: 0
          }}>{price.toLocaleString('vi-VN')} đ</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 