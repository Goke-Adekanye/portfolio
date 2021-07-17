import React from "react";
import {
  Twitter,
  LinkedIn,
  GitHub,
  WebOutlined,
  Devices,
  Language,
  Assignment,
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
    Medium: {
      link: "https://gokeadekanye.medium.com",
      text: "Jvstblvck",
      icon: <Assignment />,
    },
  },

  about:
    "Hello, I’m Goke Adekanye, a professional Frontend Web Developer based in Lagos State, Nigeria. As a graduate of Computer Science (BSc.), I am passionate about leveraging my solid background in Information Technology to decipher challenging problems and create innovative solutions that contribute positively to the IT ecosystem.\nBeing an inquisitive individual, I am constantly exploring the latest technologies that empower me to discover new and better ways to do things. I am independent, innovative, full of energy, and highly motivational. Not only am I well organized, but I am also a team player with enthusiasm for reaching completion stages and finishing tasks at hand. I collaborate effectively to implement and transform ideas into finished products. Due to my work demands, I enjoy traveling, but I also work remotely. \nI sometimes work alone, but I also collaborate with other professionals or tech companies for Outsourced Projects and Partnerships. I’m a Goal-Oriented individual with excellent communication skills coupled with strategic thinking, Time Keeping, and Project Management.",
  experiences: [
    {
      title: "Software Development",
      description:
        "Over 3 years experience developing web applications both as a solo developer or in distributed teams.",
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
        "After implementation, I make websites accessible through hosting. I ensure they are safe and secure with SSL verification.",
      icon: <Language />,
    },
  ],

  projects: [
    {
      tag: "Node",
      image: "images/mart1.png",
      images: ["images/mart1.png", "images/mart2.png", "images/mart3.png"],
      title: "E-commerce website",
      caption: "MERN Stack",
      description: "React + Node + MongoDB + Heroku",
      links: [
        {
          link: "https://github.com/Goke-Adekanye/halimart-fullstack",
          icon: <GitHub />,
        },
        {
          link: "https://ancient-shelf-94872.herokuapp.com",
          icon: <Devices />,
        },
      ],
    },

    {
      tag: "React",
      image: "images/netflix1.png",
      images: [
        "images/netflix1.png",
        "images/netflix2.png",
        "images/netflix3.png",
      ],
      title: "Netflix-Clone",
      caption: "Front-End Netflix-Clone",
      description: "React + Node + Firebase + Styled-Component + fuse.js",
      links: [
        {
          link: "https://github.com/Goke-Adekanye/netfixclone",
          icon: <GitHub />,
        },
        { link: "https://netflixclonereactweb.netlify.app", icon: <Devices /> },
      ],
    },

    {
      tag: "React",
      image: "images/store1.png",
      images: ["images/store1.png", "images/store2.png", "images/store3.png"],
      title: "E-commerce store",
      caption: "React E-commerce store",
      description: "React + Bootstrap + Styled-Component",
      links: [
        {
          link: "https://github.com/Goke-Adekanye/react-online-store",
          icon: <GitHub />,
        },
        { link: "https://reacttecommerce.netlify.app", icon: <Devices /> },
      ],
    },

    {
      tag: "Node",
      image: "images/socialape1.png",
      images: [
        "images/socialape1.png",
        "images/socialape2.png",
        "images/socialape3.png",
      ],
      title: "Social Website",
      caption: "React Social Website",
      description: "React + Redux + Node + Express + Firebase + Material UI",
      links: [
        {
          link: "https://github.com/Goke-Adekanye/react-social-app",
          icon: <GitHub />,
        },
        { link: "https://appclown.netlify.app/", icon: <Devices /> },
      ],
    },
  ],
};
