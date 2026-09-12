import React, { useContext, useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("skills");

  const navItems = [
    skillsSection.display && { id: "skills", label: "Skills" },
    workExperiences.display && { id: "experience", label: "Work Experiences" },
    bigProjects.display && { id: "projects", label: "Projects" },
    openSource.display && { id: "opensource", label: "Open Source" },
    achievementSection.display && { id: "achievements", label: "Achievements" },
    blogSection.display && { id: "blogs", label: "Blogs" },
    talkSection.display && { id: "talks", label: "Talks" },
  ].filter(Boolean);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const firstItem = navItems[0]?.id || "skills";

      // If at or near the top of the page, default to skills
      if (scrollY < 100) {
        setActiveSection(firstItem);
        return;
      }

      // If scrolled close to the bottom of the page (and actually scrolled down past 300px),
      // highlight the last visible section
      if (
        scrollY > 300 &&
        window.innerHeight + Math.round(scrollY) >=
          document.documentElement.scrollHeight - 60
      ) {
        const lastVisible = [...navItems]
          .reverse()
          .find((item) => document.getElementById(item.id));
        if (lastVisible) {
          setActiveSection(lastVisible.id);
          return;
        }
      }

      // Find the section currently in view. A reading offset of 140px accounts for the pinned header.
      const readingOffset = 140;
      let current = firstItem;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= readingOffset && rect.bottom > readingOffset) {
            current = item.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Headroom pin={true}>
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
        <ul
          id="main-menu"
          className={isDark ? "dark-menu menu" : "menu"}
          onClick={(e) => {
            if (e.target.closest("a")) {
              setIsNavOpen(false);
            }
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ToggleSwitch />
      </header>
    </Headroom>
  );
}

export default Header;
