import React from "react";
import "./SearchResults.css";


const SearchResults = ({ results }) => {
  return (
    <div className="results-section">
      

      {results.length === 0 ? (
        <p>No trains found 😢</p>
      ) : (
        results.map((train) => (
          <div key={train.id} className="result-card">
            <div className="left">
              <h3>{train.name}</h3>
              <p>{train.from} → {train.to}</p>
            </div>

            <div className="center">
              <p>{train.time}</p>
            </div>

            <div className="right">
              <button>View Details</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;