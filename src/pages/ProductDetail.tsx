import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

// Mock data for products
const products = {
  '1': {
    id: '1',
    name: 'Nồi cơm điện Philips HD3132',
    price: 1290000,
    image: '/images/noi-com-dien.jpg',
    description: 'Nồi cơm điện cao cấp với công nghệ nấu 3D, dung tích 1.8L, giữ ấm 24h, lòng nồi chống dính.',
  },
  '2': {
    id: '2',
    name: 'Máy lọc không khí Samsung',
    price: 4990000,
    image: '/images/may-loc-khong-khi.jpg',
    description: 'Máy lọc không khí thông minh với cảm biến bụi PM2.5, điều khiển qua điện thoại, phù hợp phòng 50m2.',
  },
  '3': {
    id: '3',
    name: 'Máy xay sinh tố Philips HR2118',
    price: 990000,
    image: '/images/may-xay-sinh-to.jpg',
    description: 'Máy xay sinh tố công suất 600W, cối thủy tinh 2L, 5 tốc độ xay, lưỡi dao răng cưa ProBlend.',
  },
  '4': {
    id: '4',
    name: 'Bếp từ đôi Electrolux ETD42SKA',
    price: 5990000,
    image: '/images/bep-tu.jpg',
    description: 'Bếp từ đôi với 9 mức công suất, mặt kính Schott Ceran cao cấp, tính năng hẹn giờ và khóa an toàn.',
  },
  '5': {
    id: '5',
    name: 'Nồi chiên không dầu Philips HD9650',
    price: 2990000,
    image: '/images/noi-chien-khong-dau.jpg',
    description: 'Nồi chiên không dầu công nghệ Twin TurboStar, dung tích 3.5L, điều khiển cảm ứng, 5 chương trình cài sẵn.',
  },
  '6': {
    id: '6',
    name: 'Máy hút bụi Dyson V8',
    price: 8990000,
    image: '/images/may-hut-bui.jpg',
    description: 'Máy hút bụi không dây cao cấp, thời gian sử dụng 40 phút, công nghệ lọc HEPA, đa dạng đầu hút.',
  },
  '7': {
    id: '7',
    name: 'Máy rửa chén Bosch SMS46MI01P',
    price: 12990000,
    image: '/images/may-rua-chen.jpg',
    description: 'Máy rửa chén độc lập 13 bộ, 6 chương trình rửa, công nghệ sấy khô Zeolith, vận hành êm ái.',
  },
  '8': {
    id: '8',
    name: 'Tủ lạnh Samsung Inverter',
    price: 15990000,
    image: '/images/tu-lanh.jpg',
    description: 'Tủ lạnh Side by Side 620L, công nghệ Digital Inverter tiết kiệm điện, ngăn đá không đóng tuyết.',
  },
  '9': {
    id: '9',
    name: 'Máy giặt LG Inverter',
    price: 9990000,
    image: '/images/may-giat.jpg',
    description: 'Máy giặt cửa trước 9kg, công nghệ giặt hơi nước Steam, động cơ Direct Drive bền bỉ, tiết kiệm điện.',
  }
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
      const response = await fetch(`https://api.telegram.org/bot8094196559:AAGcFYW9N_0ICyo3fW4sGD3MfhifcI1BRhs/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: 6295003216,
          text: message
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