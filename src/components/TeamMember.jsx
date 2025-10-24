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
          <img src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <div className="team-member-socials">
            <Twitter className="team-social-icon" strokeWidth={1}/>
            <Instagram className="team-social-icon" strokeWidth={1}/>
            <Linkedin className="team-social-icon" strokeWidth={1}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamMember;

