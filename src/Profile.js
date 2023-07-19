// import React from "react";
// import "./Profile.css";

// function Profile() {
//   return (
//     <div className="profile-container">
//       <h2 className="profile-heading"></h2>
//       <table className="profile-table">
        
//       <article class="card">
//     <div class="card-img">
//         <div class="card-imgs pv delete"> My Profile</div>
//     </div>
//     <div class="project-info">
//         <div class="flex">
//             <div class="project-title">Moi</div>
            
//         </div>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <a class="account">Project</a>
//     </div>
// </article>
//       </table>
//     </div>
//   );
// }

// export default Profile;

// import React from 'react';
// import './Profile.css'; 

// const ProfilePage = ({ user }) => 
// {
//   if (!user) {
//     return <div>Loading...</div>; // You can replace this with a loading spinner or custom message
//   }
//   return (
//     <div className="profile">
//       <h2>Welcome, {user.name}!</h2>
//       <div className="profile-info">
//         <div className="profile-picture">
//           <img src={user.profilePicture} alt="Profile" />
//         </div>
//         <div className="profile-details">
//           <h3>About Me</h3>
//           <p>{user.bio}</p>
//           <h3>Contact Information</h3>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <h3>Skills</h3>
//           <ul>
//             {user.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="profile-actions">
//         <button className="btn">Edit Profile</button>
//         <button className="btn btn-danger">Delete Account</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from 'react';
import "./Profile.css";

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'I am passionate about helping others and making a positive impact on the community.',
    skills: ['Communication', 'Empathy', ''],
    availability: 'Flexible',
    location: 'B K PUDHUR ,COIMBATORE',
    profilePicture: 'https://th.bing.com/th/id/OIP.CvelsGVw6qE7NwL_LihiEAHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img className="profile-picture" src={user.profilePicture} alt="Profile" />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>

      <div className="profile-details">
        <h2>Bio</h2>
        <p>{user.bio}</p>

        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h2>Availability</h2>
        <p>{user.availability}</p>

        <h2>Location</h2>
        <p>{user.location}</p>
      </div>
    </div>
  );
};

export default ProfilePage;

