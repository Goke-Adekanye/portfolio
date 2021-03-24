import React from "react";
import {
  AssignmentOutlined,
  Twitter,
  LinkedIn,
  GitHub,
  WebOutlined,
} from "@material-ui/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Goke Adekanye",
  title: "Front End Developer",
  email: "adekanyeadegoke96@gmail.com",
  address: "Lagos, NG",
  phone: "+234 80683 50106",

  socials: {
    linkedIn: {
      link: "https://www.linkedin.com/",
      text: "Goke Adekanye",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://www.github.com/",
      text: "Goke Adekanye",
      icon: <GitHub />,
    },
    Twitter: {
      link: "https://www.twitter.com/",
      text: "Jvstblvck",
      icon: <Twitter />,
    },
  },

  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit guy cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate." +
    "\n\n" +
    "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  experiences: [
    {
      title: "Experience 1",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2010 - Present",
    },
  ],

  educations: [
    {
      title: "Education 1",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2004 - 2009",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Web Development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: "images/portfolio.jpg",
      images: [
        "images/project.jpg",
        "images/project.jpg",
        "images/project.jpg",
      ],
      title: "React Project 1",
      caption: "A short description",
      description: "Started earnest brother believe an exposed",
      links: [
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.linkedin.com/", icon: <LinkedIn /> },
        { link: "https://www.twitter.com/", icon: <Twitter /> },
      ],
    },

    {
      tag: "React",
      image: "images/portfolio.jpg",
      images: [
        "images/project.jpg",
        "images/project.jpg",
        "images/project.jpg",
      ],
      title: "React Project 2",
      caption: "A short description",
      description: "Started earnest brother believe an exposed",
      links: [
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.linkedin.com/", icon: <LinkedIn /> },
        { link: "https://www.twitter.com/", icon: <Twitter /> },
      ],
    },

    {
      tag: "Python",
      image: "images/portfolio.jpg",
      images: [
        "images/project.jpg",
        "images/project.jpg",
        "images/project.jpg",
      ],
      title: "Python Project 1",
      caption: "A short description",
      description: "Started earnest brother believe an exposed",
      links: [
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.linkedin.com/", icon: <LinkedIn /> },
        { link: "https://www.twitter.com/", icon: <Twitter /> },
      ],
    },

    {
      tag: "Firebase",
      image: "images/portfolio.jpg",
      images: [
        "images/project.jpg",
        "images/project.jpg",
        "images/project.jpg",
      ],
      title: "Firebase Project 1",
      caption: "A short description",
      description: "Started earnest brother believe an exposed",
      links: [
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.linkedin.com/", icon: <LinkedIn /> },
        { link: "https://www.twitter.com/", icon: <Twitter /> },
      ],
    },
  ],
};
