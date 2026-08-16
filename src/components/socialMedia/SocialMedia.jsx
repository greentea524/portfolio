import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

/**
 * Every network rendered the same twelve lines, varying only in three places:
 * which key it reads off socialMediaLinks, its CSS modifier, and its icon
 * class. Declaring those three and mapping over them makes the shared parts —
 * `target="_blank"`, `rel="noopener noreferrer"`, the aria-label — structural
 * rather than something to remember on the eleventh copy.
 *
 * Order is the render order, so entries stay in the sequence the markup had.
 */
const NETWORKS = [
  { key: "github", modifier: "github", icon: "fab fa-github", label: "GitHub" },
  {
    key: "linkedin",
    modifier: "linkedin",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    key: "gmail",
    modifier: "google",
    icon: "fas fa-envelope",
    label: "Email",
    // The one entry whose value is not already a URL.
    href: (address) => `mailto:${address}`,
  },
  { key: "gitlab", modifier: "gitlab", icon: "fab fa-gitlab", label: "GitLab" },
  {
    key: "facebook",
    modifier: "facebook",
    icon: "fab fa-facebook-f",
    label: "Facebook",
  },
  {
    key: "instagram",
    modifier: "instagram",
    icon: "fab fa-instagram",
    label: "Instagram",
  },
  {
    key: "twitter",
    modifier: "twitter",
    icon: "fab fa-twitter",
    label: "Twitter",
  },
  { key: "medium", modifier: "medium", icon: "fab fa-medium", label: "Medium" },
  {
    key: "stackoverflow",
    modifier: "stack-overflow",
    icon: "fab fa-stack-overflow",
    label: "Stack Overflow",
  },
  { key: "kaggle", modifier: "kaggle", icon: "fab fa-kaggle", label: "Kaggle" },
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {NETWORKS.map(({ key, modifier, icon, label, href }) => {
        const value = socialMediaLinks[key];
        // An omitted key means the network is not shown at all.
        if (!value) return null;

        return (
          <a
            key={key}
            href={href ? href(value) : value}
            className={`icon-button ${modifier}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <i className={icon}></i>
            <span></span>
          </a>
        );
      })}
    </div>
  );
}
