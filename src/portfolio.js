// Summary And Greeting Section

import emoji from "react-easy-emoji";
import sacstateLogo from "./assets/images/sacstate.png";
import avsLogo from "./assets/images/avs.jpg";
import doradoLogo from "./assets/images/dorado.jpg";
import courseraLogo from "./assets/images/coursera.png";
import amaLogo from "./assets/images/ama.png";
import udemyLogo from "./assets/images/udemy-v2.png";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Screenshots of each game in the Vite games hub.
import shotMinesweeper from "./assets/images/games/minesweeper.webp";
import shotDice21 from "./assets/images/games/dice21.webp";
import shotSudoku from "./assets/images/games/sudoku.webp";
import shotTicTacToe from "./assets/images/games/tictactoe.webp";
import shot2048 from "./assets/images/games/2048.webp";
import shotWordle from "./assets/images/games/wordle.webp";
import shotInvasion from "./assets/images/games/invasion.webp";
import shotPacman from "./assets/images/games/pacman.webp";
import shotBoxing from "./assets/images/games/boxing.webp";
import shotPlatformer from "./assets/images/games/platformer.webp";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000, // Set animation duration as per your animation
};

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "David Phong",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "Passionate Full Stack Developer experienced in designing and developing robust web applications with React.js, JavaScript, and modern frontend/backend technologies.",
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/greentea524",
  linkedin: "https://www.linkedin.com/in/david-phong-48855a44/",
  // gmail: "contact@davidrakosi.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  twitter: "https://twitter.com/davidphong_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section
var devExperience = new Date().getFullYear() - 2016;
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO SOLVE PROBLEMS",
  skills: [
    emoji(
      "⚡ " +
        devExperience +
        " years of experience in software development, 3 years in quality assurance",
    ),
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications",
    ),
    emoji(
      "⚡ Develop applications with Yii2 framework and worked with MySQL Databases",
    ),
    emoji("⚡ Develop executables and scripts using Python, C++, Visual basic"),
    emoji(
      "⚡ Mobile application IOS development with React Native and Flutter",
    ),
    emoji(
      "⚡ Build real-time computer vision apps with Python, OpenCV, and MediaPipe — hand, gesture, and eye tracking",
    ),
    emoji(
      "⚡ Create interactive browser games and real-time multiplayer experiences with HTML5 Canvas and WebSockets",
    ),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University Sacramento",
      logo: sacstateLogo,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2008 - 2012",
      desc: "Senior Project",
      descBullets: [
        "Worked in a team of five to enhance a newsletter system, CiciNews, for Senior Project.",
        " Our sponsor was a Director of the Career Services Office for the Engineering and Computer Science Department.",
        " CiciNews provides the sponsor the ability to publish weekly or urgent newsletters about job opportunities and articles to subscribers.",
        " Learned to utilize Linux, Apache, MySQL, and Php environment to adapt to the school's system.",
      ],
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: stanfordLogo, // If needed, import at top
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc:
    //     "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Atlas Technical Consultants",
      companylogo: avsLogo,
      date: "May 2016 – Present",
      desc: "Atlas Technical Consultants (Acquired Alta Vista Solutions in 2020).",
      descBullets: [
        "Developed and maintained web applications primarily using PHP (Yii2 & Laravel) and JavaScript, while contributing to projects across multiple languages including React, Python, C++, and Visual Basic.",
        "Built a web application for the California Department of Transportation (Caltrans) Material Engineering and Testing Services (METS) lab to manage materials testing data storage and reporting.",
        "Developed the Job Mix Formula (JMF) application to streamline data collection, verification, calculation, and approval processes from materials testing databases.",
        "Rewrote a legacy C program into C++ to create an executable script for processing and storing test data from an Instron Bluehill Universal testing machine into a central database.",
        "Upgraded multiple client applications from PHP5 to PHP8, including troubleshooting and resolving compatibility issues.",
        "Designed and implemented user interfaces for combined aggregate gradation reports, enabling users to share test results according to standard specifications.",
        "Assisted in the development and testing of client API systems for seamless integration with multiple databases.",
        "Contributed to both frontend and backend development while working in an Agile team environment.",
        "Utilized SQL Server Management Studio and Deltek Vision for project reporting and database management.",
        "Provided internal IT support for approximately one year.",
      ],
    },
    {
      role: "Quality Assurance Engineer",
      company: "Dorado Software",
      companylogo: doradoLogo,
      date: "Aug 2012 – Apr 2016",
      desc: "",
      descBullets: [
        "Performed Quality Assurance testing for network management software used to manage enterprise routers and switches.",
        "Conducted software application and web server installations across Windows, Linux, and VMware environments.",
        "Automated test cases using Selenium and managed defects through JIRA in a Scrum Agile environment.",
        "Worked with MySQL and Oracle databases for testing and verification purposes.",
        "Managed and deployed virtualized cloud lab environments using Mirantis Fuel OpenStack and ESXi VMware.",
        "Modified and improved software installers using InstallAnywhere.",
        "Collaborated with development teams to identify, troubleshoot, and resolve software defects and enhancements.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "", // Set your GitHub token here if needed, or leave as empty string
  githubUserName: "greentea524", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "selected work from my projects",
  projects: [
    {
      projectName: "Web Games Hub",
      fullWidth: true, // gallery is tall — give it its own grid row
      projectDesc:
        "A retro desktop-themed arcade in my Vite app collecting ten browser games. Four are built as React components rendered in-app — Minesweeper, Dice 21, Sudoku, and TicTacToe — alongside six standalone JavaScript games including a canvas Pacman, an alien-invasion shooter, a Wordle clone, 2048, an RPG boxing sim, and a multiplayer 2D platformer.",
      techStack: [
        "React 18",
        "Vite",
        "JavaScript",
        "HTML5 Canvas",
        "React Bootstrap",
        "GitHub Pages",
      ],
      gallery: [
        {
          name: "Minesweeper",
          image: shotMinesweeper,
          url: "https://greentea524.github.io/vite-project",
        },
        {
          name: "Dice 21",
          image: shotDice21,
          url: "https://greentea524.github.io/vite-project",
        },
        {
          name: "Sudoku",
          image: shotSudoku,
          url: "https://greentea524.github.io/vite-project",
        },
        {
          name: "TicTacToe",
          image: shotTicTacToe,
          url: "https://greentea524.github.io/vite-project",
        },
        {
          name: "2048",
          image: shot2048,
          url: "https://greentea524.github.io/game/js-2048-main/",
        },
        {
          name: "Wordle",
          image: shotWordle,
          url: "https://greentea524.github.io/game/wordle-clone-main/",
        },
        {
          name: "Invasion",
          image: shotInvasion,
          url: "https://greentea524.github.io/game/js-alien-invasion/",
        },
        {
          name: "Pacman",
          image: shotPacman,
          url: "https://greentea524.github.io/game/js-pacman/",
        },
        {
          name: "Boxing RPG",
          image: shotBoxing,
          url: "https://greentea524.github.io/game/js-boxing/",
        },
        {
          name: "Platformer",
          image: shotPlatformer,
          url: "https://greentea524.github.io/vite-project/platformer/",
        },
      ],
      footerLink: [
        {
          name: "Link",
          url: "https://greentea524.github.io/vite-project",
        },
        {
          name: "GitHub",
          url: "https://github.com/greentea524/vite-project",
        },
      ],
    },
    {
      projectName: "Developer Utilities & Tools",
      projectDesc:
        "The utilities side of the same Vite app: a unit-aware fuel-cost calculator, an interactive data dashboard with sortable tables and Google Charts, a Rubik's Cube solver that computes a solution from a scrambled state, and a fake hacker terminal that streams auto-scrolling logs for screen recordings.",
      techStack: [
        "React 18",
        "Vite",
        "React Google Charts",
        "TanStack React Query",
        "React Transition Group",
        "Bootstrap 5",
      ],
      footerLink: [
        {
          name: "Link",
          url: "https://greentea524.github.io/vite-project",
        },
        {
          name: "GitHub",
          url: "https://github.com/greentea524/vite-project",
        },
      ],
    },
    {
      projectName: "2D Platformer Game (Web & Godot)",
      projectDesc:
        "A 2D platformer originally built in Godot 4 and ported to a Vite app rendering on an HTML5 canvas. Features include six levels across two worlds, polished movement (coyote time, variable jump height, double jump), stompable enemies, hazards, coins, and checkpoints. The web version includes React overlays for menus and HUD, mobile-friendly touch controls, and a work-in-progress multiplayer \"Race a friend\" mode using Socket.IO for real-time 4-player races.",
      techStack: [
        "React 18",
        "Vite",
        "Godot 4",
        "HTML5 Canvas",
        "Socket.IO",
        "Game Loop / Physics",
      ],
      footerLink: [
        {
          name: "Link",
          url: "https://greentea524.github.io/vite-project/platformer",
        },
        {
          name: "Web GitHub",
          url: "https://github.com/greentea524/vite-project",
        },
        {
          name: "Godot GitHub",
          url: "https://github.com/greentea524/godot-game",
        },
      ],
    },
    {
      projectName: "camera-track — Real-Time Webcam Vision Toys",
      projectDesc:
        "A trio of real-time computer-vision apps driven by a webcam: a finger counter that sums 0–10 across two hands, an eye tracker that reads gaze direction plus blink rate, drowsiness, and no-blink/staring time from Face Mesh irises, and a gesture-controlled Rock-Paper-Scissors game with countdown and scorekeeping. Each app draws a live landmark overlay in a resizable preview window and ships a hardware-free self-test mode, all reachable from a single menu launcher.",
      techStack: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "NumPy",
        "Computer Vision",
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/greentea524/camera-track",
        },
      ],
    },
    {
      projectName: "Flutter Shopping App",
      projectDesc:
        "Cross-platform Flutter shop with a category-grouped catalog, an editable cart with shipping tiers and live tax/total math, and persistent order history powered by Hive — including order tracking, status progression, and cancel/archive/delete actions.",
      techStack: [
        "Flutter",
        "Dart",
        "Material 3",
        "Hive",
        "Local Storage",
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/greentea524/shopping-app",
        },
      ],
    },
    {
      projectName: "Nebula Play — Flutter Games Hub",
      projectDesc:
        "A neon-themed Flutter arcade bundling five playable games — Alien Invasion, Pacman Arcade, 2048 Fusion, a daily Wordle clone, and Minesweeper — with persistent high scores via local storage and a responsive desktop/mobile game-card grid.",
      techStack: [
        "Flutter",
        "Dart",
        "Provider",
        "Local Storage",
        "Material Design",
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/greentea524/flutter_application",
        },
      ],
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python Data Structures",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/XEZ93TVXXBJT",
        },
        // {
        //   name: "Final Project",
        //   url: ""
        // },
      ],
    },
    {
      title: "Front-end Web Development with React",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/AX5EG3TKNVAT",
        },
      ],
    },
    {
      title: "System Administration and IT Infrastructure Services",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/UFB5ADGEH7HN",
        },
      ],
    },
    {
      title: "Management Skills for New Managers",
      subtitle: "American Management Association",
      image: amaLogo,
      footerLink: [],
    },
    {
      title: "Jenkins, From Zero To Hero: Become a DevOps Jenkins Master",
      subtitle: "Udemy",
      image: udemyLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-c21f5ddc-663e-4131-a621-0d3c96a3aa84/",
        },
      ],
    },
    {
      title: "Postman: The Complete Guide - REST API Testing",
      subtitle: "Udemy",
      image: udemyLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b8cb71b9-5bb4-4bff-ab51-36f40be2e5f7/",
        },
      ],
    },
    {
      title: "Google AI Essentials",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/6O8ZH4XK2R7L",
        },
      ],
    },
    {
      title: "Fundamentals of Project Planning and Management",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/C3S8J5LDWUJY",
        },
      ],
    },
    {
      title: "Introduction to Software Product Management",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/L3PG5D25DYGS",
        },
      ],
    },
    {
      title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      subtitle: "Coursera",
      image: courseraLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/T9RI6BO2UTKC",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "(323) 768 0674",
  // email_address: "drinkyourtea@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidphong_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
