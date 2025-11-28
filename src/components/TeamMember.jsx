// components/aboutunicindeolmalilar/TeamMember.jsx
import { Twitter, Instagram, Linkedin } from "lucide-react";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";
import i9 from "../assets/i9.png";
import "./TeamMember.css";

function TeamMember() {
  const team = [
    { image: i7, name: "Tom Cruise", role: "Founder & Chairman" },
    { image: i8, name: "Emma Watson", role: "Managing Director" },
    { image: i9, name: "Will Smith", role: "Product Designer" },
  ];

  return (
    <div className="team-members-container">
      {team.map((member, index) => (
        <div className="team-member-card" key={index}>
          <div className="team-member-image-wrapper">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
          </div>
          <div className="team-member-info">
            <h2 className="team-member-name">{member.name}</h2>
            <p className="team-member-role">{member.role}</p>
          </div>
          <div className="team-member-socials">
            <Twitter
              className="team-social-icon twitter-icon"
              strokeWidth={1}
            />
            <Instagram
              className="team-social-icon instagram-icon"
              strokeWidth={1}
            />
            <Linkedin
              className="team-social-icon linkedin-icon"
              strokeWidth={1}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamMember;
