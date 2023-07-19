import React from "react";
import { Link } from "react-router-dom";
import image from"./clean.jpg"  
import "./EnvironmentalCleanup.css";

function EnvironmentalCleanup() {
  return (
    <div className="eclean">
      <div className="ko">
      <h2>Environmental Cleanup</h2>
      </div>
      <div className="gg">
        <img src={image} alt="Environmental Cleanup"/>
      </div>
      <div className="ol">
      <p>
        Help us make a positive impact on the environment by joining our cleanup event. We'll be
        removing litter and debris from local parks and natural areas.
      </p>
      <p>
      1.Identify the Target Area: Determine the specific location or ecosystem that requires cleanup. It could be a polluted river, a contaminated industrial site, a littered beach, or any other area in need of restoration.<br/>
      <br/>
      2.Assess Risks and Hazards: Before starting cleanup activities, assess potential risks and hazards associated with the targeted area. This includes evaluating chemical contamination, biological hazards, or physical dangers. Take necessary safety precautions and ensure proper training and protective equipment for participants.<br/>
      <br/>
      3.Plan and Organize: Develop a cleanup plan that outlines the objectives, tasks, and timeline. Identify the resources and materials needed for the cleanup, such as trash bags, gloves, tools, and equipment. Organize volunteers, assign roles, and communicate guidelines and safety protocols.<br/>
      <br/>
      4.Collaborate and Engage: Encourage participation from the local community, environmental organizations, businesses, and government agencies. Collaborate with relevant stakeholders to leverage expertise, resources, and support. Engage volunteers through awareness campaigns, social media, and local events to raise awareness and foster a sense of environmental responsibility.<br/>
      <br/>
      5.Cleanup Techniques: Depending on the nature of pollution, use appropriate cleanup techniques. This may include manual picking up of litter, using nets to remove debris from water bodies, employing specialized equipment for hazardous waste cleanup, or implementing bioremediation techniques for soil and water contamination.<br/>
      <br/>
      6.Waste Management: Develop a waste management plan to handle the collected debris and hazardous materials safely. Separate recyclable items from non-recyclable waste. Dispose of hazardous waste following local regulations and guidelines. Promote recycling and proper disposal practices among participants and the local community.<br/>
      </p>
      </div>
      <h3>Event Details</h3>
      <ul>
        <li>Date: August 15, 2023</li>
        <li>Time: 9:00 AM - 12:00 PM</li>
        <li>Location: City Park</li>
        <li>Address: 123 Main Street, City</li>
      </ul>
      <h3>What to Bring</h3>
      <p>Please come prepared with the following:</p>
      <ul>
        <li>Gloves</li>
        <li>Garden tools (e.g., trowel, rake)</li>
        <li>Reusable water bottle</li>
        <li>Sunscreen and hat</li>
      </ul>
      <h3>Contact Information</h3>
      <p>
        For more information or to sign up for this event, please contact our volunteer coordinator
        at volunteer@example.com or call (123) 456-7890.
      </p>
      <button type="sed" className="yy">
          <Link to="/ConfirmParticipation">
           <span className="ll">
             ConfirmParticipation
           </span>
           
          </Link>
        </button>
    </div>
  );
}

export default EnvironmentalCleanup;
