import React, { useContext } from "react";
// import { Fade } from "react-awesome-reveal";
//import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import Button from "../../components/button/Button.jsx";

import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
                <span className="wave-emoji">{"👋"}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink ? (
                  <Button
                    text={greeting.resumeLinkText}
                    href={greeting.resumeLink}
                    newTab={true}
                  />
                ) : (
                  <Button text="Contact Me" href="#contact" />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <DisplayLottie animationData={landingPerson} />
          </div>
        </div>
      </div>
    </>
  );
}
