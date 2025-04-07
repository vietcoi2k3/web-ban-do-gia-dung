import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Mock data for products
const products = {
  '1': {
    id: '1',
    name: 'iPhone 14 Pro Max',
    price: 34990000,
    image: '/images/iphone.jpg',
    description: 'iPhone 14 Pro Max với chip A16 Bionic, camera 48MP và màn hình Super Retina XDR OLED 6.7 inch.',
  },
  '2': {
    id: '2',
    name: 'MacBook Pro M2',
    price: 42990000,
    image: '/images/macbook.jpg',
    description: 'MacBook Pro với chip M2, màn hình Liquid Retina XDR 14 inch và thời lượng pin lên đến 18 giờ.',
  },
  '3': {
    id: '3',
    name: 'iPad Pro 12.9',
    price: 29990000,
    image: '/images/ipad.jpg',
    description: 'iPad Pro 12.9 inch với chip M2, màn hình Liquid Retina XDR và hỗ trợ Apple Pencil.',
  },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id as keyof typeof products];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gửi thông tin đơn hàng qua Telegram Bot API
    const message = `
🛍️ Đơn hàng mới:
📱 Sản phẩm: ${product.name}
💰 Giá: ${product.price.toLocaleString('vi-VN')}đ
👤 Tên: ${formData.name}
📞 Số điện thoại: ${formData.phone}
📍 Địa chỉ: ${formData.address}
📝 Ghi chú: ${formData.note}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
        setFormData({ name: '', phone: '', address: '', note: '' });
      } else {
        alert('Có lỗi xảy ra, vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại sau.');
    }
  };

  if (!product) {
    return <div style={{ padding: '32px 16px' }}>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '32px 16px' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '32px',
      }} className="product-detail-grid">
        <div style={{ position: 'relative', height: '400px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
        <div>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '16px' 
          }}>
            {product.name}
          </h1>
          <p style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#2563eb',
            marginBottom: '16px' 
          }}>
            {product.price.toLocaleString('vi-VN')} đ
          </p>
          <p style={{ 
            color: '#4b5563', 
            marginBottom: '32px' 
          }}>
            {product.description}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label htmlFor="name" style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 500, 
                marginBottom: '4px' 
              }}>
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                required
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                }}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 500, 
                marginBottom: '4px' 
              }}>
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                required
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                }}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="address" style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 500, 
                marginBottom: '4px' 
              }}>
                Địa chỉ
              </label>
              <textarea
                id="address"
                required
                rows={3}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                }}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="note" style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: 500, 
                marginBottom: '4px' 
              }}>
                Ghi chú
              </label>
              <textarea
                id="note"
                rows={3}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                }}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '12px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Đặt hàng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 