// Summary And Greeting Section

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "David Phong",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks."
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
        " years of experience in software development, 3 years in quality assurance"
    ),
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Develop applications with Yii2 framework and worked with MySQL Databases"
    ),
    emoji("⚡ Develop executables and scripts using Python, C++, Visual basic"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
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
      logo: require("./assets/images/sacstate.png"),
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
    //   logo: require("./assets/images/stanfordLogo.png"),
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
      companylogo: require("./assets/images/avs.jpg"),
      date: "May 2016 – Present",
      desc: "Atlas Technical Consultants (Acquired Alta Vista Solutions in 2020). Experienced with Yii2 and Laravel frameworks and built application mainly in PHP and JavaScript language. Worked on many small projects in different languages such as React, Python, C++ and Visual basic",
      descBullets: [
        "Worked on a web application project that allows data storage of materials testing and reporting for the California Department of Transportation - Material Engineering and Testing Services (METS) lab",
        "Worked on Job Mix Formula (JMF) application to gather data from materials testing database to perform data verification, data calculation, hard copy forms into digital, and approval process",
        "Rewrote a C project into C++ to compile an executable script to send test data from Instron Bluehill Universal test machine to store in a test result database.",
        "Update, resolve, and troubleshoot applications for several client applications - PHP5 to PHP8",
        "Design the user interface for combined aggregate gradation report for users to share gradation results with standard specifications",
        "Assist with developing and testing on client's API system that connects to several of client's databases",
        "Responsible for frontend and backend work.",
        "Worked with development team in an agile environment",
        "Use SQL Server Management Studio environment to work with Deltek Vision database for project reports.",
        "Experienced with IT helping internally for about a year.",
      ],
    },
    {
      role: "Quality Assurance Engineer",
      company: "Dorado Software",
      companylogo: require("./assets/images/dorado.jpg"),
      date: "Aug 2012 – Apr 2016",
      desc: "Quality Assurance testing for network management software that manage network routers and switches",
      descBullets: [
        "Software application and web server installation in Windows and Linux OS VMWare environment",
        "Worked with database MySQL and Oracle.",
        "Used JIRA Issue tracking system to manage bugs and enhancements verification",
        "Assist team to resolve problems or defects",
        "Scrum Agile experience",
        "Made changes to the software installer - InstallAnywhere",
        "Automation testing with Selenium",
        "Managed ESXI vmware environment",
        "Mirantis Fuel OpenStack deployment - manage and deployed virtualized cloud lab environment",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "greentea524", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
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
      image: require("./assets/images/coursera.png"),
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
      image: require("./assets/images/coursera.png"),
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
      image: require("./assets/images/coursera.png"),
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
      image: require("./assets/images/ama.png"),
      footerLink: [],
    },
    {
      title: "Jenkins, From Zero To Hero: Become a DevOps Jenkins Master",
      subtitle: "Udemy",
      image: require("./assets/images/udemy-v2.png"),
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
      image: require("./assets/images/udemy-v2.png"),
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
      image: require("./assets/images/coursera.png"),
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
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/C3S8J5LDWUJY",
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
