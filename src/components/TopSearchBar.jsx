import React, { useState } from "react";
import "../styling/TopSearchBar.css";

const destinations = [
  "Nashik","Nagpur","Satara","Aahilyanagar","Chhatrapati Sambhajinagar","Sindhudurg","Ratnagiri","Raigad","Chandrapur",
];

const budget = [
    "Below ₹2000","₹2000-₹3000","₹3000-₹4000","₹4000-₹5000",
]

const TopSearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [showTopDown,setShowTopDown] = useState(false)

  return (
    <div className="top-search-container">
      <div className="search-box">

        
        <div
          className="search-item"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <b>📍Destinations across Maharashtra <i class="bi bi-chevron-down"></i></b>
        </div>

       
        <div className="search-item"
        onClick={()=> setShowTopDown(!showTopDown)}>
            
          <b>💰 Budget <i class="bi bi-chevron-down"></i></b>
        </div>

       
        <div className="search-item">
          <select name="" id="" style={{borderRadius:"6px",backgroundColor:"blanchedalmond"}}> 
            <option value="">👥Tour types</option>
            <option value="group">Group Tour</option>
            <option value="personal">Personal Tour</option>
          </select>
        </div>

        
      </div>

     
      {showDropdown && (
        <div className="dropdown-box">
          {destinations.map((place, index) => (
            <span key={index} className="place-pill">
              {place}
            </span>
          ))}
        </div>
      )}

      {showTopDown && (
        <div className="dropdown-box">
            {budget.map((amount,index)=> (
                <span key={index} className="place-pill">
                    {amount}
                </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default TopSearchBar;
