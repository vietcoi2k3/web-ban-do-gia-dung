import React from 'react';
import ProductCard from '../components/ProductCard';

// Mock data for products
const products = [
  {
    id: '1',
    name: 'Nồi cơm điện Philips HD3132',
    price: 1290000,
    image: '/images/noi-com-dien.jpg',
    description: 'Nồi cơm điện cao cấp với công nghệ nấu 3D, dung tích 1.8L, giữ ấm 24h, lòng nồi chống dính.',
  },
  {
    id: '2',
    name: 'Máy lọc không khí Samsung',
    price: 4990000,
    image: '/images/may-loc-khong-khi.jpg',
    description: 'Máy lọc không khí thông minh với cảm biến bụi PM2.5, điều khiển qua điện thoại, phù hợp phòng 50m2.',
  },
  {
    id: '3',
    name: 'Máy xay sinh tố Philips HR2118',
    price: 990000,
    image: '/images/may-xay-sinh-to.jpg',
    description: 'Máy xay sinh tố công suất 600W, cối thủy tinh 2L, 5 tốc độ xay, lưỡi dao răng cưa ProBlend.',
  },
  {
    id: '4',
    name: 'Bếp từ đôi Electrolux ETD42SKA',
    price: 5990000,
    image: '/images/bep-tu.jpg',
    description: 'Bếp từ đôi với 9 mức công suất, mặt kính Schott Ceran cao cấp, tính năng hẹn giờ và khóa an toàn.',
  },
  {
    id: '5',
    name: 'Nồi chiên không dầu Philips HD9650',
    price: 2990000,
    image: '/images/noi-chien-khong-dau.jpg',
    description: 'Nồi chiên không dầu công nghệ Twin TurboStar, dung tích 3.5L, điều khiển cảm ứng, 5 chương trình cài sẵn.',
  },
  {
    id: '6',
    name: 'Máy hút bụi Dyson V8',
    price: 8990000,
    image: '/images/may-hut-bui.jpg',
    description: 'Máy hút bụi không dây cao cấp, thời gian sử dụng 40 phút, công nghệ lọc HEPA, đa dạng đầu hút.',
  },
  {
    id: '7',
    name: 'Máy rửa chén Bosch SMS46MI01P',
    price: 12990000,
    image: '/images/may-rua-chen.jpg',
    description: 'Máy rửa chén độc lập 13 bộ, 6 chương trình rửa, công nghệ sấy khô Zeolith, vận hành êm ái.',
  },
  {
    id: '8',
    name: 'Tủ lạnh Samsung Inverter',
    price: 15990000,
    image: '/images/tu-lanh.jpg',
    description: 'Tủ lạnh Side by Side 620L, công nghệ Digital Inverter tiết kiệm điện, ngăn đá không đóng tuyết.',
  },
  {
    id: '9',
    name: 'Máy giặt LG Inverter',
    price: 9990000,
    image: '/images/may-giat.jpg',
    description: 'Máy giặt cửa trước 9kg, công nghệ giặt hơi nước Steam, động cơ Direct Drive bền bỉ, tiết kiệm điện.',
  }
];

const Home: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '32px 16px' 
    }}>
      <h1 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: '32px' 
      }}>
        Đồ Gia Dụng Cao Cấp
      </h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home; 