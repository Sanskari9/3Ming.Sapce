import Headline from "../components/Headline"
import React, { useState } from "react";
import "./pricing.css";
import Navbar from "../components/Navbar";
const PLANS = [
  {
    id: "Silver",
    name: "Silver",
    priceMonthly: 25,
    priceYearly: 2000,
    features: ["List 1 Web3 Game", "Basic interaction", "Assets library"],
  },
  {
    id: "Gold",
    name: "Gold",
    priceMonthly: 40,
    priceYearly: 4000,
    features: ["List 2 web3 Games", "Basic interaction", "Assets library"],
  },
  {
    id: "Diamand",
    name: "Diamand",
    priceMonthly:250,
    priceYearly: 5000,
    features: ["List 5 Web3 Games", "Basic interaction", "Assets library"],
  },
];

function Promote() {
  const [isYearly, setIsYearly] = useState(false);

  const cardColor = !isYearly ? "#4a2a6b" : "#00203f";

  const textColor = !isYearly ? "#c7d3d4" : "#adefd1";

  const nameColor = !isYearly ? "white" : "white";
  const priceColor = !isYearly ? "#c7d3d4" : "#adefd1";
  const listColor = !isYearly ? "white" : "white";
  const buyNow=!isYearly?'#4a2a6b':'#242134'
  const toggleColor=!isYearly?'':'#4a2a6b'

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const pricingPlans = PLANS.map((plan) => {
    const price = isYearly ? plan.priceYearly : plan.priceMonthly;
    return (
      <div
        key={plan.id}
        className="pricing-card"
        style={{ backgroundColor: cardColor }}
      >
        <div className="pricing-card-header">
          <h2 style={{ color: nameColor }}>{plan.name}</h2>
          <div className="pricing-card-price" style={{ color: priceColor }}>
            ${price} {isYearly ? "per year" : "per month"}
          </div>
        </div>
        <div className="pricing-card-features">
          <ul>
            {plan.features.map((feature) => (
              <li key={feature} style={{ color: listColor }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="pricing-card-button"
          style={{ backgroundColor: textColor,color:buyNow }}
        ><a href="https://www.linkedin.com/company/3ming-space/?viewAsMember=true">Buy Now</a>
        </button>
      </div>
    );
  });
  return (
    <div>
      <Headline />
        <Navbar />
        <div className="mt-5 box-price">
          <h2 className="upcomming mt-5 pt-5 text-white">Pricing Plans</h2>
          <h4 className="price-abt mt-2 pt-2 text-white pb-1 mb-5">3Ming works for businesses of all sizes Tailor your plan to your needs.</h4>
        </div>
        <div className="mb-4 pricing-container">
      <div className="pricing-toggle">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={handleToggle}  />
          <span className="slider" style={{backgroundColor:toggleColor}} ></span>
        </label>
        <span>Yearly</span>
      </div>
      <div className="pricing-cards">{pricingPlans}</div>
    </div>
    </div>
    
  );
}
export default Promote;