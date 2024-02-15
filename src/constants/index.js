import {
    mobile,
    backend,
    creator,
    web,
    // nextjs,
    // express,
    // awscloud,
    // graphql,
    // java,
    // jenkins,
    // mysql,
    business,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    efaida,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  import SirArslan from './Images Senior/Arslan.jpg'
  import SirTalha from './Images Senior/Talha.jpg'
  import SirUsama from './Images Senior/Usama.jpg'

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "service",
      title: "Service",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Business Analyst",
      icon: business,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "AWSCloud",
    //   icon: awscloud,
    // },
    {
      name: "CSS",
      icon: css,
    },
    // {
    //   name: "Express",
    //   icon: express,
    // },
    // {
    //   name: "GraphQL",
    //   icon: graphql,
    // },
    // {
    //   name: "Java",
    //   icon: java,
    // },
    // {
    //   name: "Jenkins",
    //   icon: jenkins,
    // },
    // {
    //   name: "MySQL",
    //   icon: mysql,
    // },
    // {
    //   name: "NextJS",
    //   icon: nextjs,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "Redux-Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind-CSS",
      icon: tailwind,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ThreeJS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "eFAIDA Technologies",
      icon: efaida,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Business Analyst",
      company_name: "eFAIDA Technologies",
      icon: efaida,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "A business analyst in a company like Efaida Tech would typically be responsible",
        "for various tasks related to analyzing business processes, identifying needs and ",
        "opportunities for improvement, gathering and analyzing data, and providing recommendations",
        " to support decision-making and strategy development within the company.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "M. Arslan",
      designation: "Full Stack Engineer",
      company: "eFAIDA Technologies",
      image: `${SirArslan}`,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Talha Hashmi",
      designation: "Technical Project Manager ",
      company: "eFAIDA Technologies",
      image: `${SirTalha}`,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Usama",
      designation: "Business Analyst",
      company: "NetBridge Ltd.",
      image: `${SirUsama}`,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };