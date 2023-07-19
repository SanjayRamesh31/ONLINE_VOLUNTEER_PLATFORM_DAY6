import React from "react";
import './EnvironmentalVolunteering.css'
import { Link } from "react-router-dom";
import image from "./environmentalvol.jpg";
import Navbar from "./Navbar";
function EnvironmentalVolunteering() {
  return (
   
    <div className="environmental-volunteering-container">
       <Navbar/>
      <h2>Environmental Volunteering</h2>
      <div className="kk">
      <img src={image} alt="Environmental Volunteering" />
      </div>
      <br/>
      <p>
        Join us in making a difference for the environment. We organize various activities and projects to protect and preserve our natural resources.
      </p>
      <h3>Volunteer Opportunities</h3>
      <ul>
        <li>Tree Planting: Join our tree planting initiatives to combat deforestation and improve air quality.</li>
        <li>Trail Maintenance: Assist in maintaining hiking trails and preserving natural habitats.</li>
        <li>Environmental Education: Support educational programs to raise awareness about environmental issues.</li>
      </ul>
      <h3>Benefits of Volunteering</h3>
      <ul>
        <li>Contribute to environmental conservation efforts</li>
        <li>Learn about sustainability and ecological practices</li>
        <li>Connect with like-minded individuals and organizations</li>
        <li>Gain valuable knowledge and skills related to environmental stewardship</li>
      </ul>
      <h3>Contact Information</h3>
      <p>
        If you are interested in volunteering or have any questions, please contact us at volunteer@gmail.com.
      </p>
      <button type="submit" className="yy">
          <Link to="/ConfirmParticipation" style={{textDecoration:'none'}}className="aaa">
            <span className="mm">
                ConfirmParticipation
            </span>
           
          </Link>
        </button>
        
    </div>
  );
}

export default EnvironmentalVolunteering;
