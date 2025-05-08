import React, { useState } from 'react';

const OrderForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="col-md-8 justify-content-center text-center" style={{ width: '80%', margin: '0 auto' }}>
      <form>
        <h1 className="text-danger">Please choose your preferred way of getting your order</h1>

        <div className="d-flex justify-content-center mb-4" style={{ width: '100%' }}>
          <label className="mr-4" style={{ width: '45%' }}>
            <img
              src="images/delivery.png"
              alt="Delivery"
              style={{ width: '100%' }}
              className="mb-2"
            />
            <p>
              Delivery
              <input
                type="radio"
                name="orderOption"
                value="delivery"
                checked={selectedOption === 'delivery'}
                onChange={handleRadioChange}
                style={{ marginTop: '10px' }}
              />
            </p>
          </label>
          <label style={{ width: '45%' }}>
            <img
              src="images/pick up.jpg"
              alt="Pick up"
              style={{ width: '100%' }}
              className="mb-2"
            />
            <p>
              Pick Up
              <input
                type="radio"
                name="orderOption"
                value="pickup"
                checked={selectedOption === 'pickup'}
                onChange={handleRadioChange}
                style={{ marginTop: '10px' }}
              />
            </p>
          </label>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your location"
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter the day you wish to pick up or have it delivered"
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        />

        <h5 className="mt-5 p-3">
          If you would like to pick up your order at our physical store, we are located in Nairobi city near Archives.
        </h5>
        

        {/* Add an image at the end */}
        <div style={{ marginTop: '20px' }}>
          <img
            src="images/thankyou note.png"  // Replace with the actual path to your image
            alt="Thank you"
            style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto' }}
          />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
