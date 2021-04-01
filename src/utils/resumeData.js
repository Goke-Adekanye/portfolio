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
