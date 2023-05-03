import {
    mobile,
    backend,
    creator,
    web,
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
    shopify,
    threejs,
  } from "../assets";
  import tiktakpro from "../assets/company/tiktakpro.png";
  import orangetn from "../assets/company/orangetn.png"
  import elvie from "../assets/elvi_screenshot.png"
  import eaze from "../assets/eazeshowcase.png"
  import blaster from "../assets/blaster.png"
  import thed from "../assets/thed.png"


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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
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
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
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
      title: "UI/UX DESIGNER/FRONT END  developer",
      company_name: "TikTakPro",
      icon: tiktakpro,
      iconBg: "#383E56",
      date: "November 2022 - February 2023",
      points: [
        "Worked as a front-end web developer at Tiktak Pro, an e-commerce platform based in Tunisia.",
        "Managed the design for templates in the website builder integrated in the platform using Django and Vue.js",
        "Created responsive and accessible layouts to allow users to customize their shop template.",
        "Gained experience in internationalization (i18n) and added custom languages and dynamic translations with Django.",
        "Learned to work with  dynamic CSS variables in the backoffice to allow users to customize their shop template.",
        "Worked closely with the back-end team to ensure compatibility between the front-end design and dynamic CSS.",
        
      ],
    },
    {
      title: " UI/UX DESIGNER/FRONT END  developer",
      company_name: "Orange Tunisia",
      icon: orangetn,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "As part of the Orange Summer Challenge in 2020, I worked as a UI/UX designer and front-end developer on a project called Eaze, which aimed to improve the shopping experience through the development of a smart cart solution. My contributions to the project included the creation and design of mobile and web interfaces, as well as the development of the showcase site to present the product. In addition to my design work, I also played a key role in creating the brand and logo for the product.",
        "One of the key challenges we faced during the project was ensuring a seamless user experience across multiple platforms and devices. To address this, I collaborated closely with cross-functional teams to ensure that the interfaces we created were intuitive and user-friendly. In addition, I experimented with new design tools and techniques to create a visually engaging experience for users.        ",
        "Thanks to our team's efforts, the Eaze project was a success, resulting in increased user engagement and sales. I am proud of the work I did on this project and believe that my creativity and problem-solving abilities would make me a valuable asset to any team.",
      ],
    },
    {
      title: "Freelance",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2020- Present",
      points: [
        "An environmental project called Fakrounet which is a mobile French: fluentapplication with the aim of tracking the occurrence of sea turtlesvia GPS and Google Map services to reduce the random hunting of sea turtles. (Java/Firebase)",
        "A complete redesign of the user interface of an existing Tunisiane-commerce site called baddel.tn in order to respect a modern and responsive design. (AdobeXD, Figma & Adobe Illustrator)",
       
      ],
    },
    
  ];
  

  
  const projects = [
    {
      name: "Elvie-Formation",
      description:
        "This website is a stunning showcase of a school, with a modern and sleek design that draws visitors in and highlights the best features of the institution. The homepage greets visitors with a full-width banner image and a clear, concise message about the school's mission and values. The main navigation menu is easy to use, with clear and descriptive labels for each section of the site.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "JQUERRY",
          color: "green-text-gradient",
        },
      ],
      image: elvie,
      source_code_link: "https://github.com/firasbentalebtn/elvi",
      showcase_link: "https://firasbentalebtn.github.io/elvi/index.html",
    },
    {
      name: "Eaze",
      description:
        "Eaze is a smart cart project with a sleek landing page showcasing its convenience and simplicity. It features a banner image of the product in action, highlights its features, benefits, and calls to action for early access. Social proof is provided through customer testimonials and partner logos. The page effectively communicates the value of Eaze as a smart shopping solution.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "JQUERRY",
          color: "green-text-gradient",
        },
        {
          name: "Owl-carousel",
          color: "pink-text-gradient",
        },
      ],
      image: eaze,
      source_code_link: "https://github.com/firasbentalebtn/eaze",
      showcase_link: "https://firasbentalebtn.github.io/eaze/"

    },
    {
      name: "Blasterozone",
      description:
        "BLASTER OZONE SOLUTIONS' landing page highlights their expertise in ozone disinfection technology, emphasizing the creation of advanced devices for airborne disinfection of environmental surfaces. The page features a modern design, effective communication of product value, and clear calls to action.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "JQUERRY",
          color: "green-text-gradient",
        },
      ],
      image: blaster,
      source_code_link: "https://github.com/firasbentalebtn/blasterozone",
      showcase_link:"https://blasterozone.tn/"
    },
    {
      name: "Theerineum",
      description:
        "Theerineum's landing page showcases its fast transactions, low fees, transparency, and security. It includes a roadmap, clear calls to action, social proof, and highlights its deflationary crypto economics for long-term value growth.",
      tags: [
        {
          name: "React-Js",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: thed,
      source_code_link: "https://github.com/firasbentalebtn/thedwebsite",
      showcase_link:"https://firasbentalebtn.github.io/thed3/"
    },
  ];
  
  export { services, technologies, experiences, projects };
  