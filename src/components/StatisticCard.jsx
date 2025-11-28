import { Store, CircleDollarSign, ShoppingBag, Wallet } from "lucide-react";
import "./StatisticCard.css";
function StatisticCard() {
  const cards = [
    {
      icon: <Store size={40} strokeWidth={1} />,
      title: "10.5k",
      desc: "Sallers active our site",
    },
    {
      icon: <CircleDollarSign size={40} strokeWidth={1} />,
      title: "33k",
      desc: "Monthly Product Sale",
    },
    {
      icon: <ShoppingBag size={40} strokeWidth={1} />,
      title: "45.5k",
      desc: "Customer active in our site",
    },
    {
      icon: <Wallet size={40} strokeWidth={1} />,
      title: "25k",
      desc: "Anual gross sale in our site",
    },
  ];
  return (
    <div className="statistic-cards-container">
      {cards.map((card, index) => (
        <div className="statistic-card" key={index}>
          <div className="statistic-card-icon">{card.icon}</div>
          <p className="statistic-card-title">{card.title}</p>
          <p className="statistic-card-desc">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
export default StatisticCard;
