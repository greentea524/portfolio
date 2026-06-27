import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
// import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <>
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project) => {
              return (
                <div
                  key={project.projectName || project.projectDesc}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.techStack ? (
                      <div className="project-tech-stack">
                        {project.techStack.map((tech) => (
                          <span
                            key={`${project.projectName}-${tech}`}
                            className={
                              isDark
                                ? "dark-mode project-tag tech-tag"
                                : "project-tag tech-tag"
                            }
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link) => {
                          return (
                            <a
                              key={
                                link.url ||
                                `${project.projectName}-${link.name}`
                              }
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.name}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
