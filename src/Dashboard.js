import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [opportunities, setOpportunities] = useState([]);

//   useEffect(() => {
//     // Fetch volunteer opportunities from the backend API
//     fetch("/api/opportunities")
//       .then((response) => response.json())
//       .then((data) => setOpportunities(data))
//       .catch((error) => console.log(error));
//   }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Volunteer Opportunities Dashboard</h2>
      {opportunities.length === 0 ? (
        <p className="dashboard-message">No volunteer opportunities available at the moment.</p>
      ) : (
        <ul className="dashboard-list">
          {opportunities.map((opportunity) => (
            <li key={opportunity.id} className="dashboard-item">
              <h3 className="dashboard-title">{opportunity.title}</h3>
              <p className="dashboard-description">{opportunity.description}</p>
              <Link to={`/opportunities/${opportunity.id}`} className="dashboard-link">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
