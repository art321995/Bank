import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";

export const footerData = [
  {
    id: 1,
    title: "Links útiles",
    links: [
      {
        id: 1,
        name: "Contenido",
        link: "#",
      },
      {
        id: 2,
        name: "Como trabajamos",
        link: "#",
      },
      {
        id: 3,
        name: "Crear",
        link: "#",
      },
      {
        id: 4,
        name: "Explorar",
        link: "#",
      },
      {
        id: 5,
        name: "Términos y condiciones",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Comunidad",
    links: [
      {
        id: 1,
        name: "Centro de ayuda",
        link: "#",
      },
      {
        id: 2,
        name: "Partners",
        link: "#",
      },
      {
        id: 3,
        name: "Sugerencias",
        link: "#",
      },
      {
        id: 4,
        name: "Blog",
        link: "#",
      },
      {
        id: 5,
        name: "Newsletter",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Partner",
    links: [
      {
        id: 1,
        name: "Nuestro partner",
        link: "#",
      },
      {
        id: 2,
        name: "Hazte partner",
        link: "#",
      },
    ],
  },
];

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <SiNetlify />,
    link: "https://app.netlify.com/teams/art321995"
  },
  {
    id: 2,
    icon: <RiGithubFill />,
    link: "https://github.com/art321995"
  },
  {
    id: 3,
    icon: <RiLinkedinBoxFill />,
    link: "https://www.linkedin.com/in/arturo-esqueda-morales-3feb1995"
  },
];
