import React from "react";
import "./AchievementCard.css";

export default function AchivementCard({ cardInfo }) {
  return (
    <div className="certificate-card">
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
        {cardInfo.subtitle && (
          <p className="card-description">{cardInfo.subtitle}</p>
        )}
        {cardInfo.date && <p className="card-date">{cardInfo.date}</p>}
      </div>
    </div>
  );
}
