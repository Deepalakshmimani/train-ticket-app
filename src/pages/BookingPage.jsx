// BookingPage.jsx

import React, { useState } from "react";
import "./BookingPage.css";
import { allTrains } from "../assets/assets";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

function BookingPage() {

  const { id } = useParams();

  const { user } = useAppContext();

  const train = allTrains.find(
    item => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    date: "",
    seats: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const availability = train.bookings?.find(
    item => item.date === formData.date
  );

  const handleBooking = () => {

    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.date
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (availability?.availableSeats > 0) {
      toast.success("Booking Successful 🎉");
    } else {
      toast.error(
        "No seats available. Please select another date"
      );
    }
  };

  return (
    <div className="booking-page">

      <div className="booking-card">

        <h1>Train Booking</h1>

        <div className="train-summary">

          <h2>{train.name}</h2>

          <p>
            {train.from} → {train.to}
          </p>

          <div className="booking-info">

            <span>
              📅 {formData.date || "Select Date"}
            </span>

            <span>
              🎫 {availability?.availableSeats || 0} Seats Available
            </span>

            <span>{train.type}</span>

          </div>

          <h3 className="price">
            ₹ {formData.seats * train.price}
          </h3>

        </div>

        <div className="booking-form">

          <input
            type="text"
            name="name"
            placeholder="Passenger Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <input
            type="number"
            name="seats"
            placeholder="Number of Seats"
            value={formData.seats}
            onChange={handleChange}
            min="1"
          />

          <button onClick={handleBooking}>
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingPage;