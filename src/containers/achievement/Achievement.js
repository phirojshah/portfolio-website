import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {
  if (!achievementSection.achievements) {
    return null;
  }

  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">
            {achievementSection.title}
          </h1>
          <p className="subTitle achievement-subtitle">
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achievements.map((achievement) => {
            return (
              <Fade bottom duration={2000} distance="20px" key={achievement.id}>
                <AchivementCard
                  cardInfo={{
                    title: achievement.title,
                    description: achievement.subtitle,
                    subtitle: achievement.description,
                    date: achievement.date,
                  }}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
