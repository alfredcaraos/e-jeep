import React, { useState } from "react";
import "./booking.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform payment logic here
    console.log("Payment details:");
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Cardholder Name:", cardholderName);

    // Reset form
    setCardNumber("");
    setExpiryDate("");
    setCVV("");
    setCardholderName("");
  };

  return (
    <div className="payment">
      <div className="cover">
        <div className="Login bg-success">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-white">Online Payment</h1>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                className="form-control"
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
              <div className="invalid-feedback">
                Please Enter a Valid Card Number
              </div>
            </div>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                className="form-control"
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                required
              />
              <div className="invalid-feedback">
                Please Enter a Valid Expiry Date
              </div>
            </div>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="cvv">
                CVV
              </label>
              <input
                className="form-control"
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCVVChange}
                required
              />
              <div className="invalid-feedback">
                Please Enter a Valid CVV
              </div>
            </div>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="name">
                Cardholder Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={cardholderName}
                onChange={handleCardholderNameChange}
                required
              />
              <div className="invalid-feedback">
                Please Enter the Cardholder Name
              </div>
            </div>

            <Link to="/account">
              <input
                className="btn btn-success bg-primary text-white w-50"
                type="submit"
                value="Pay Now"
              />
            </Link>

            <Link to="/account">
              <input
                className="btn btn-success bg-danger text-white w-50"
                type="button"
                value="Cancel"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
