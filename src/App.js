import React from 'react';
import './App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
const colors = ['Black', 'Red', 'Blue'];
const imageUrls = [
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24418230/2023/8/10/146609ee-4ac6-4029-94fa-92f2fcbf32d41691663358930USPoloAssnWomenGreyTexturedPUOversizedStructuredShoulderBag2.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24418228/2023/8/9/a6ad5770-d73c-47d3-a1dc-1de22c3e12a71691591140051USPoloAssnWomenBeigePUStructuredShoulderBag2.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24575494/2023/8/21/29def474-4576-498f-98d2-bfa009dcf2cf1692619852484USPoloAssnWomenBrownTexturedPUOversizedStructuredShoulderBag2.jpg',
];

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div className="header-content">
      <div className="header-buttons">
          <button className="profile-button" style={{display:'flex',gap:'5px'}}><CgProfile/>My Profile</button>
          <button className="cart-button " style={{display:'flex',gap:'5px'}}><AiOutlineShoppingCart/>Cart</button>
        </div>
        <div className="branding">
          <h1>Luxurious Women's Bag</h1>
        
          <p>Available in 3 Beautiful Colors</p>
        </div>
      
      </div>
      <div className="bag-container">
  {imageUrls.map((url, index) => (
    <div key={index} className="bag">
      <img src={url} alt={`Luxurious Bag ${index + 1}`} />
      <h2>Bag {index + 1}</h2>
      <p>Price: INR 99,999</p>
      <button>Add to Cart</button>
    </div>
  ))}
</div>

      </header>
      <section className="store-location">
        <h2>Store Location</h2>
        <p>We have a store in Delhi/NCR where you can explore our exclusive collection:</p>
        <p>Address: 123, Luxurious Bag Street, Delhi, India</p>
        <p>Opening Hours: Mon-Sat: 10:00 AM - 7:00 PM</p>
      </section>
    </div>
  );
}

export default App;
