// components/shared/Delivery/Delivery.jsx
import React from "react";
import "./Delivery.css";
import { Bus, Headset, ShieldCheck } from "lucide-react";

function Delivery() {
  const items = [
    {
      icon: <Bus size={50} strokeWidth={1} />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: <Headset size={50} strokeWidth={1} />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck size={50} strokeWidth={1} />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <div className="delivery1">
      {items.map((item, index) => (
        <div className="delivery2" key={index}>
          <div className="delivery-icon">{item.icon}</div>
          <p className="delivery-title">{item.title}</p>
          <p className="delivery-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Delivery;
