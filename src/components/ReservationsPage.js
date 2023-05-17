import React from 'react';
import "./styles/ReservationsContent.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Immerse yourself in the epitome of luxury and tradition at Little Lemon.</h2>
                <p>Discover our commitment to delivering an extraordinary experience, where we take pride in pampering our customers with unparalleled elegance and timeless <em>charm</em>.</p>
                <p>Experience culinary excellence in our inviting ambiance.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in reservation details to book a table at Little Lemon.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage