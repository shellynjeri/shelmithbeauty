import React from 'react';
import { Link } from 'react-router-dom';
import ChatBot from './chatbot';

const Aboutus = () => {
  return (
    <>
      <div className='row' style={{ marginBottom: '20px' }}>
        <div className='col-md-6 corevalues' style={{ paddingBottom: '20px' }}>
          <img src="images/slidetwo.avif" alt="photo" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className='col-md-6 corevalues' style={{ paddingBottom: '20px' }}>
          <h1>Our Goal</h1>
          <p>The goal of a beauty shop is to provide high-quality beauty and grooming services that enhance customers' appearance and well-being, while delivering excellent customer service in a relaxing and welcoming environment.</p>
        </div>
      </div>

      <div className='row info-section' style={{ paddingTop: '30px', marginTop: '20px', marginBottom: '20px' }}>
        <div className='col-md-6 corevalues' style={{ paddingBottom: '20px' }}>
          <h3 className='corevaluesh3 text-center'>Our Beautychatbot</h3>
          <ChatBot />
        </div>
        <div className='col-md-6 corevalues' style={{ paddingBottom: '20px' }}>
          <h3 className='corevaluesh3'>Our Core Values</h3>
          <ul className='corevaluesul'>
            <li className='corevaluesli'>Quality First</li>
            <li className='corevaluesli'>Customer-Centric Services</li>
            <li className='corevaluesli'>Empowering Confidence</li>
            <li className='corevaluesli'>Eco-Friendly Beauty</li>
            <li className='corevaluesli'>Inclusivity</li>
            <li className='corevaluesli'>Innovation</li>
            <li className='corevaluesli'>Integrity</li>
            <li className='corevaluesli'>Affordability with Excellence</li>
            <li className='corevaluesli'>Community Engagement</li>
          </ul>
        </div>
      </div>

      <div className="row bg-danger p-4 mt-4">
        <div className="col-md-6 text-light">
          <h4 className="text-center">About Us</h4>
          <p>Welcome to Shelly BeautyShop, this is a beauty website where you can get all your favorite makeup products at an affordable cost. We tend to give our customers what they deserve, and our services are very high class.</p>
        </div>

        <div className="col-md-6">
          <h4 className="text-light">For any comment or complaint, please fill out this form</h4>
          <form>
            <textarea className="form-control" placeholder="Leave a comment" cols="10" rows="5" required></textarea>
            <input type="submit" value="Send message" className="btn" style={{ backgroundColor: 'pink', color: 'black', border: 'none' }} />
          </form>
        </div>
      </div>

      <div className="row bg-danger p-4 mt-4">
        <div className="col-md-6">
          <h4 className="text-light">Stay Connected</h4>
          <Link to="https://www.facebook.com"><img src="images/fb.png" alt="facebook" style={{ width: '50px' }} /></Link>
          <Link to="https://www.instagram.com"><img src="images/in.png" alt="instagram" style={{ width: '50px' }} /></Link>
          <Link to="https://www.x.com"><img src="images/x.png" alt="twitter" style={{ width: '50px' }} /></Link>
          <p className="text-light">All Facebook, Instagram, and X social handles are active. If you want to join our team, please don’t shy away and contact us at any time.</p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
