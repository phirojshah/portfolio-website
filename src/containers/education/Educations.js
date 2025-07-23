import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees, workExperience } from "../../portfolio";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Education
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.map((degree) => (
            <DegreeCard key={degree.title} degree={degree} theme={theme} />
          ))}
        </div>

        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Professional Experience
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {workExperience.map((workExp) => (
            <div key={workExp.title}>
              <div className="experience-cards-div">
                {workExp.experiences.map((experience) => (
                  <ExperienceCard
                    key={experience.title}
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Educations;
