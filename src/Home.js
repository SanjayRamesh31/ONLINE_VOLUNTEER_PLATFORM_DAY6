import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
   
    <div className="home-container">
        <Navbar/> 
      <h2 className="home-heading">Welcome to the Volunteer Platform</h2>
      <p className="home-description">
        Thank you for joining our volunteer platform! Together, we can make a difference in the
        world.
      </p>
      <p className="home-message">
        "The best way to find yourself is to lose yourself in the service of others." - Mahatma
        Gandhi
      </p>
      <p className="home-mess">
      In New Orleans we regularly had groups of unskilled volunteers fly tremendous distances, citing bake sales and the incredible support of the community and congregations to fund their trip. The money their community raised benefited them by enabling them to physically be in New Orleans while the labor they provided became the currency that our organization received. Our clients were grateful for their service, and we were grateful for the time they spent working with us (and, to be honest, spending money in our city). But it cost, on average $650- $750 to paint a house, and 20 volunteers x ~$300/airfare = $6,000. And that’s just airfare. Meals, trip t-shirts, new clothing and shoes were often additional expenses. We were aware that local groups, or those traveling shorter distances, could provide the same free labor to do the same job, minus housing and meal costs, potentially with some continuity. Or that with additional dollars, we might be able to hire skilled painters, at a potential discount, to do this work professionally for our clients or provide training sessions on a regular basis.
      </p>
      
      <Link to="/VolunteerOpportunities" className="home-link">
        Explore Volunteer Opportunities
      </Link>
    </div>
  );
}

export default Home;
