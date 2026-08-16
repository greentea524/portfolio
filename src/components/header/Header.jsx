import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  bigProjects,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  // The open state used to live in a CSS `:checked` selector on a hidden
  // checkbox. That cannot report itself: `aria-expanded` has to be rendered
  // from a value React knows, so the state moves here and CSS reads a class.
  const [isNavOpen, setIsNavOpen] = useState(false);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header
        className={[
          isDark ? "dark-menu header" : "header",
          isNavOpen ? "nav-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        {/*
          A real button, not the previous checkbox-and-label pair. That
          checkbox was `display: none`, so it was neither focusable nor in the
          accessibility tree — its aria-label announced to nobody, and the
          menu could not be opened by keyboard at all.
        */}
        <button
          type="button"
          className="menu-icon"
          aria-label="Navigation menu"
          aria-expanded={isNavOpen}
          aria-controls="main-menu"
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span
            className={isDark ? "navicon navicon-dark" : "navicon"}
            aria-hidden="true"
          ></span>
        </button>
        <ul id="main-menu" className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
        </ul>
        <ToggleSwitch />
      </header>
    </Headroom>
  );
}

export default Header;
