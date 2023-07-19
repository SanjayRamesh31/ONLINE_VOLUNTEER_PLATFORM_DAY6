import React from "react";
import { Link } from "react-router-dom";
import "./VolunteerOpportunities.css";
import Navbar from "./Navbar";

function VolunteerOpportunities() {
  
  const opportunities = [
    {
      id: 1,
      title: "Environmental Cleanup",
      description: "Join us in cleaning up local parks and preserving our environment.",
      location: "B.K Pudur,Coimbatore",
      date: "July 14,",
      link1:"/EnvironmentalCleanup",

    },
    {
      id: 2,
      title: "Environmental Volunteering:",
      description: "Engage in activities that promote environmental sustainability and conservation, such as tree planting, beach cleanups, or advocating for sustainable practices in your community.",
      location: "Kuniyamuthur, Coimbatore",
      date: "Will update soon",
      link1: "/EnvironmentalVolunteering",
    },

  ];

  return (
    <div className="volunteer-opportunities-container">
      <Navbar/> 
      <h2 className="volunteer-opportunities-heading">Volunteer Opportunities</h2>
      {opportunities.length === 0 ? (
        <p className="volunteer-opportunities-message">No volunteer opportunities available at the moment.</p>
      ) : (
        <ul className="volunteer-opportunities-list">
          {opportunities.map((opportunity) => (
            <li key={opportunity.id} className="volunteer-opportunity-item">
              <h3 className="volunteer-opportunity-title">{opportunity.title}</h3>
              <p className="volunteer-opportunity-description">{opportunity.description}</p>
              <p className="volunteer-opportunity-details">
                Location: {opportunity.location} | Date: {opportunity.date}
              </p>
              <Link to={opportunity.link1} className="volunteer-opportunity-link">
                Learn More
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VolunteerOpportunities;
