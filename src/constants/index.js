import { nvidia, google, dukeUni, ibm } from "../assets/images";

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "(Frontend)",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "(Frontend)",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "(Frontend)",
  },

  {
    imageUrl: react,
    name: "React",
    type: "(Frontend)",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "(State Management)",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "(Frontend)",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "(Frontend)",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "(Backend)",
  },

  {
    imageUrl: express,
    name: "Express",
    type: "(Backend)",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "(Database)",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "(Version Control)",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "(Version Control)",
  },

  {
    imageUrl: motion,
    name: "Motion",
    type: "(Animation)",
  },
];

export const experiences = [
  {
    title: "What Is Data Science ?",
    Company: "IBM",
    Issued_By: "Coursera",
    icon: ibm,
    iconBg: "#accbe1",
    date: "April 29, 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/XYYWM8DWMXM5",
  },
  {
    title: "Programming Fundamentals",
    Company: "Duke University",
    Issued_By: "Coursera",
    icon: dukeUni,
    iconBg: "#fbc3bc",
    date: "July 6, 2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/VUYCLQYFNYXR",
  },
  {
    title: "Foundations Of User Experience (UX) Design",
    Company: "Google",
    Issued_By: "Coursera",
    icon: google,
    iconBg: "#b7e4c7",
    date: "September 7, 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/M8S98FC92EQZ",
  },
  {
    title: "Fundamentals Of Deep Learning",
    Company: "NVIDIA Deep Learning Institute",
    Issued_By: "NVIDIA Deep Learning Institute",
    icon: nvidia,
    iconBg: "#a2d2ff",
    date: "January 2021",
    link: "https://drive.google.com/file/d/1znKoO-BT1wUB29ybJ-tkB6-0V85f4ZpI/view",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/aryanmamania",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aryan-mamania-a1998a23a",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    iconBg: "btn-back-red",
    theme: "btn-back-red",
    name: "Chatting_App",
    description:
      "BlinkChat is a Full Stack Real-time Chatting Website including features such as direct one-to-one as well as group messaging. It uses Socket.io for real-time communication and stores user details in encrypted format in the Mongo DB Database. Features: User login & signup, Real-time chatting, Message Notifications, Real-time typing indicator, Creating Group, Renaming Group, Adding/Removing users from group (admins only), Viewing other users' profiles",
    link: "https://github.com/aryanmamania/Connectify?tab=readme-ov-file#connectify-a-real-time-messaging-website",
    link2: "https://blinkchat.onrender.com/"
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Login/SignUp page",
    description:
      'This MERN Stack Login/SignUp page is a secure authentication solution with features including user registration, login, password management, and OTP verification. It offers a seamless experience for users to create accounts, sign in securely, and reset passwords when needed. With robust security measures and user-friendly functionalities, it ensures a protected and convenient authentication process for modern web applications.',
    link: "https://github.com/aryanmamania/MERN_Login_app",
    link2: "https://github.com/aryanmamania/MERN_Login_app"
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-orange",
    
    name: "e-commerce shoe store",
    description:
    "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs just by copying the URL of the page whose summary is required and you will get the summary of that app with help of this App",
    link: "https://github.com/aryanmamania/summarizer",
    link2: "https://tiny-medovik-55cbdc.netlify.app/"
  },


  {
    iconUrl: estate,
    theme: "btn-back-orange",
    name: "Summary-App",
    description:
    "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs just by copying the URL of the page whose summary is required and you will get the summary of that app with help of this App",
    link: "https://github.com/aryanmamania/summarizer",
    link2: "https://tiny-medovik-55cbdc.netlify.app/"
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "MovieMosaic",
    description:
      "Built a beautiful UI movie App called MovieMosic where we can see top trending movies of this week or month with their IMBD ratings and can even search for other movies and watch their trailer and diffent informations such as cast",
    link: "https://github.com/aryanmamania/Movie_App",
    link2: "https://frabjous-platypus-38e303.netlify.app/"
  },
  {
    iconUrl: pricewise,
    iconBg: "btn-back-red",
    theme: "btn-back-red",
    name: "Music App",
    description:
      "Our music app offers a curated selection of songs with easy-to-use controls for play, pause, and next track. Enjoy seamless music playback and immerse yourself in captivating melodies anytime, anywhere",
    link: "https://github.com/aryanmamania/music_app",
    link2: "https://blinkchat.onrender.com/"
  },
];
