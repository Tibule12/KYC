import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to the Khayelitsha Youth Choir</h1>
          <p>Sharing the joy of music with our community and beyond</p>
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>
          The Khayelitsha Youth Choir is a vibrant and passionate group of young singers dedicated to sharing the joy of music with our community and beyond.
        </p>
        <p>
          We perform a diverse repertoire ranging from traditional African songs to contemporary choral pieces. Our mission is to nurture talent, build confidence, and foster unity through the power of song.
        </p>
        <p>
          Whether you are a music lover, a potential member, or a supporter, we invite you to explore our website to learn more about us and how you can be part of this wonderful journey.
        </p>
      </section>
      <section className="social-links">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.tiktok.com/@khayelitsha_youth_choir?_r=1&_d=egfjilkjfmem5b&sec_uid=MS4wLjABAAAAFKNPUgUHSecXEG38S1LECkqdl-At7x8ZUx14YHFdaOI_AshlLZov1CzSyLHRMh3D&share_author_id=6942136339031131142&sharer_language=en&source=h5_m&u_code=dhhm35lj8al1hg&timestamp=1745570702&user_id=6942136339031131142&sec_user_id=MS4wLjABAAAAFKNPUgUHSecXEG38S1LECkqdl-At7x8ZUx14YHFdaOI_AshlLZov1CzSyLHRMh3D&utm_source=whatsapp&utm_campaign=client_share&utm_medium=android&share_iid=7496522277724079927&share_link_id=60e8972d-f5e4-483f-96e1-da9f56f0187c&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61556566296668" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
