import React from 'react'
import "./RecommendedTrains.css"
import { assets,trains } from "../assets/assets";
import { useAppContext } from '../context/AppContext';

const Recommended = () => {


  return (
    <div className="recommended">

      <h2>Recommended Trains</h2>

      <div className="train-container">

        {trains.map((train) => (

          <div key={train.id} className="train-card">

           

            <div className="train-info">

              <div className="top-row">
                <h3>{train.name}</h3>
                <span className="rating">⭐ {train.rating}</span>
              </div>

              

              <p className="route">{train.route}</p>

              <div className="timing">

                <div>
                  <h4>{train.departure}</h4>
                  <span>Departure</span>
                </div>

                <div className="duration">
                  ⏱ {train.duration}
                </div>

                <div>
                  <h4>{train.arrival}</h4>
                  <span>Arrival</span>
                </div>

              </div>

              <div className="bottom-row">

                <div>
                  <p className="type">{train.type}</p>
                  <p className="seats">
                    🎫 {train.availableSeats} Seats Available
                  </p>
                </div>

                <div className="price-section">
                  <h3 className="price">₹ {train.price}</h3>
                  <p className="reason">{train.reason}</p>
                </div>

              </div>

              <button className="book-btn">
                Book Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Recommended;