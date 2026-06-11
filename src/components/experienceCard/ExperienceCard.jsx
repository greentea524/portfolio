import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

function rgb(values) {
  return typeof values === "undefined"
    ? null
    : "rgb(" + values.join(", ") + ")";
}

function DescBullets({ descBullets, isDark, company }) {
  if (!descBullets) {
    return null;
  }

  return descBullets.map((item) => (
    <li
      key={`${company}-${item}`}
      className={isDark ? "subTitle dark-mode-text" : "subTitle"}
    >
      {item}
    </li>
  ));
}

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{ background: rgb(colorArrays) }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        {cardInfo.date && (
          <p
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {cardInfo.date}
          </p>
        )}
        {cardInfo.desc && (
          <p
            className={
              isDark
                ? "experience-text-desc dark-mode-text"
                : "experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
        )}
        {cardInfo.descBullets && (
          <ul className="experience-text-bullets">
            <DescBullets
              descBullets={cardInfo.descBullets}
              isDark={isDark}
              company={cardInfo.company}
            />
          </ul>
        )}
      </div>
    </div>
  );
}
