import React from "react";
import {
  Twitter,
  LinkedIn,
  GitHub,
  WebOutlined,
  Devices,
  Language,
} from "@material-ui/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Goke Adekanye",
  title: "Front End Developer",
  email: "adekanyeadegoke96@gmail.com",
  location: "Lagos, NG",
  phone: "+234 80683 50106",

  socials: {
    linkedIn: {
      link: "https://linkedin.com/in/goke-adekanye-ab5a7b139",
      text: "Goke Adekanye",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://github.com/Goke-Adekanye",
      text: "Goke Adekanye",
      icon: <GitHub />,
    },
    Twitter: {
      link: "https://twitter.com/Jvstblvck",
      text: "Jvstblvck",
      icon: <Twitter />,
    },
  },

  about:
    "Experienced Software Engineer with Javascript as my primary language using the react framework. Skilled in HTML, CSS, Bootstrap, Node.js, React, and Redux. As a developer, I have experience in building modern reusable Javascript modules, I also have experience building backend RESTful APIs (Node + Express) backed by NoSQL databases, and consuming them with React client-side web applications. \n\n With a relentless desire to improve myself and my team, I flourish when working alone or in teams. My academic background made me appreciate and develop an interest in recognizing real-life problems and develop solutions for them.",

  experiences: [
    {
      title: "Software Development",
      description:
        "Over 2 years experience developing web applications both as a solo developer or in distributed teams.",
    },

    {
      title: "Leadership",
      description:
        "Strong leadership skills, Leading teams of 5 - 8 developers",
    },
  ],

  educations: [
    {
      title: "Adekunle Ajasin University",
      description: "Bachelor of Science[Computer Science]",
      date: "2013 - 2017",
    },

    {
      title: "Federal Science and Technical College",
      description: "Senior School Certificate",
      date: "2007 - 2013",
    },
  ],

  services: [
    {
      title: "Web Development",
      description:
        "I use various web technologies to create attractive websites which portrays the exact specified functionalities",
      icon: <WebOutlined />,
    },
    {
      title: "Design",
      description:
        "I develop creative and responsive layouts and easy to navigate websites that matches customer's expectations",
      icon: <Devices />,
    },
    {
      title: "Hosting",
      description:
        "After implemntation, i make websites accessible through hosting. I ensure they are safe and secure with SSL verification.",
      icon: <Language />,
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
