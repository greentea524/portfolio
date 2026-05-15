import React, { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import Greeting from "./greeting/Greeting.jsx";
import Skills from "./skills/Skills.jsx";
import StackProgress from "./skillProgress/skillProgress.jsx";
import WorkExperience from "./workExperience/WorkExperience.jsx";
import Projects from "./projects/Projects.jsx";
import StartupProject from "./StartupProjects/StartupProject.jsx";
import Achievement from "./achievement/Achievement.jsx";
import Blogs from "./blogs/Blogs.jsx";
import Footer from "../components/footer/Footer.jsx";
import Talks from "./talks/Talks.jsx";
import Podcast from "./podcast/Podcast.jsx";
import Education from "./education/Education.jsx";
import ScrollToTopButton from "./topbutton/Top.jsx";
import Twitter from "./twitter-embed/twitter.jsx";
import Profile from "./profile/Profile.jsx";
import SplashScreen from "./splashScreen/SplashScreen.jsx";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration,
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
