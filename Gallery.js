import React, { useState } from 'react';
import './Gallery.css';

import Img1 from './images/1.jpeg';
import Img2 from './images/2.jpeg';
import Img3 from './images/3.jpeg';
import Img4 from './images/4.jpeg';
import Img5 from './images/5.jpeg';
import Img6 from './images/6.jpeg';
import Img7 from './images/7.jpeg';
import Img8 from './images/8.jpeg';
import Img9 from './images/9.jpeg';
import Img10 from './images/10.jpeg';
import Img11 from './images/11.jpeg';
import Img12 from './images/12.jpeg';
import Img13 from './images/13.jpeg';
import Img14 from './images/14.jpeg';
import Img15 from './images/15.jpeg';
import Img16 from './images/16.jpeg';
import Img17 from './images/17.jpeg';
import Img18 from './images/18.jpeg';
import Img19 from './images/19.jpeg';
import Img20 from './images/20.jpeg';

import BelindaBobby from './images/Belinda Bobby.jpeg';
import Esona from './images/Esona Ngwevela.jpeg';
import JuniorFana from './images/Junior Fana.jpeg';
import NandiVokwana from './images/Nandi Vokwana.jpeg';
import SibuleleRwadi from './images/Sibulele Rwadi.jpeg';
import YolethaJack from './images/Yoletha Jack.jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_45_1 from './images/WhatsApp Image 2025-04-25 at 14.40.45 (1).jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_45_2 from './images/WhatsApp Image 2025-04-25 at 14.40.45 (2).jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_45 from './images/WhatsApp Image 2025-04-25 at 14.40.45.jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_46_1 from './images/WhatsApp Image 2025-04-25 at 14.40.46 (1).jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_46 from './images/WhatsApp Image 2025-04-25 at 14.40.46.jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_47_1 from './images/WhatsApp Image 2025-04-25 at 14.40.47 (1).jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_47 from './images/WhatsApp Image 2025-04-25 at 14.40.47.jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_48 from './images/WhatsApp Image 2025-04-25 at 14.40.48.jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_49 from './images/WhatsApp Image 2025-04-25 at 14.40.49.jpeg';
import WhatsApp_Image_2025_04_25_at_14_40_50 from './images/WhatsApp Image 2025-04-25 at 14.40.50.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_08 from './images/WhatsApp Image 2025-04-25 at 14.42.08.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_18 from './images/WhatsApp Image 2025-04-25 at 14.42.18.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_29 from './images/WhatsApp Image 2025-04-25 at 14.42.29.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_30 from './images/WhatsApp Image 2025-04-25 at 14.42.30.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_31 from './images/WhatsApp Image 2025-04-25 at 14.42.31.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_34 from './images/WhatsApp Image 2025-04-25 at 14.42.34.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_35 from './images/WhatsApp Image 2025-04-25 at 14.42.35.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_36_1 from './images/WhatsApp Image 2025-04-25 at 14.42.36 (1).jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_36 from './images/WhatsApp Image 2025-04-25 at 14.42.36.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_37 from './images/WhatsApp Image 2025-04-25 at 14.42.37.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_38 from './images/WhatsApp Image 2025-04-25 at 14.42.38.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_39 from './images/WhatsApp Image 2025-04-25 at 14.42.39.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_40_1 from './images/WhatsApp Image 2025-04-25 at 14.42.40 (1).jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_40 from './images/WhatsApp Image 2025-04-25 at 14.42.40.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_41 from './images/WhatsApp Image 2025-04-25 at 14.42.41.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_42_1 from './images/WhatsApp Image 2025-04-25 at 14.42.42 (1).jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_42 from './images/WhatsApp Image 2025-04-25 at 14.42.42.jpeg';
import WhatsApp_Image_2025_04_25_at_14_42_43 from './images/WhatsApp Image 2025-04-25 at 14.42.43.jpeg';
import AnoxoloImg from './images/Anoxolo Roy.jpeg';
import SamkeloImg from './images/Samkelo Silwangangubo.jpeg';

import Colab2 from './videos/Colab (2).mp4';
import Colab from './videos/Colab.mp4';
import KYC from './videos/KYC.mp4';
import KYC2 from './videos/KYC (2).mp4';
import KYC3 from './videos/KYC (3).mp4';
import KYC4 from './videos/KYC (4).mp4';
import KYC5 from './videos/KYC (5).mp4';
import KYC6 from './videos/KYC (6).mp4';
import KYC7 from './videos/KYC (7).mp4';
import KYC8 from './videos/KYC (8).mp4';
import KYC9 from './videos/KYC (9).mp4';
import KYC10 from './videos/KYC (10).mp4';

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  BelindaBobby,
  Esona,
  JuniorFana,
  NandiVokwana,
  SibuleleRwadi,
  YolethaJack,
  WhatsApp_Image_2025_04_25_at_14_40_45_1,
  WhatsApp_Image_2025_04_25_at_14_40_45_2,
  WhatsApp_Image_2025_04_25_at_14_40_45,
  WhatsApp_Image_2025_04_25_at_14_40_46_1,
  WhatsApp_Image_2025_04_25_at_14_40_46,
  WhatsApp_Image_2025_04_25_at_14_40_47_1,
  WhatsApp_Image_2025_04_25_at_14_40_47,
  WhatsApp_Image_2025_04_25_at_14_40_48,
  WhatsApp_Image_2025_04_25_at_14_40_49,
  WhatsApp_Image_2025_04_25_at_14_40_50,
  WhatsApp_Image_2025_04_25_at_14_42_08,
  WhatsApp_Image_2025_04_25_at_14_42_18,
  WhatsApp_Image_2025_04_25_at_14_42_29,
  WhatsApp_Image_2025_04_25_at_14_42_30,
  WhatsApp_Image_2025_04_25_at_14_42_31,
  WhatsApp_Image_2025_04_25_at_14_42_34,
  WhatsApp_Image_2025_04_25_at_14_42_35,
  WhatsApp_Image_2025_04_25_at_14_42_36_1,
  WhatsApp_Image_2025_04_25_at_14_42_36,
  WhatsApp_Image_2025_04_25_at_14_42_37,
  WhatsApp_Image_2025_04_25_at_14_42_38,
  WhatsApp_Image_2025_04_25_at_14_42_39,
  WhatsApp_Image_2025_04_25_at_14_42_40_1,
  WhatsApp_Image_2025_04_25_at_14_42_40,
  WhatsApp_Image_2025_04_25_at_14_42_41,
  WhatsApp_Image_2025_04_25_at_14_42_42_1,
  WhatsApp_Image_2025_04_25_at_14_42_42,
  WhatsApp_Image_2025_04_25_at_14_42_43,
  AnoxoloImg,
  SamkeloImg,
];

const videos = [
  Colab2,
  Colab,
  KYC,
  KYC2,
  KYC3,
  KYC4,
  KYC5,
  KYC6,
  KYC7,
  KYC8,
  KYC9,
  KYC10,
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('pictures');

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-nav">
        <button
          className={activeTab === 'pictures' ? 'active' : ''}
          onClick={() => setActiveTab('pictures')}
        >
          Pictures
        </button>
        <button
          className={activeTab === 'videos' ? 'active' : ''}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
      </div>
      {activeTab === 'pictures' && (
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery pic ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      )}
      {activeTab === 'videos' && (
        <div className="gallery-grid">
          {videos.map((video, index) => (
            <div key={index} className="gallery-item">
              <video controls className="gallery-video" >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
