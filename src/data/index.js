import { algorithms, devnotes, oscs } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Developer Full stack",
    company_name: "Student",
    date: "2022 - 2024",
    details: [
      "Learning by mylself coding with numerous tutorial and create many online website ",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Self Employment",
    company_name: "Myself",
    date: "2021 - 2022",
    details: [
      "Seller on partnership with <span style='color: white;'>Amazon</span> on segment of <span style='color: white;'>Games and toys</span>.",
      "Find New product and increase sales as well as <span style='color: white;'>inventory management and cash</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement marketing strategies.",
    ],
  },
  {
    title: "External Auditor",
    company_name: "MoMa",
    date: "2019 - 2021",
    details: [
      "Student at <span style='color: white;'>Montpellier Management</span> learning accounting, Legal Compliance, and Risk Management.",
      "Worked and interned at <span style='color: white;'>Diocèse de Montpellier</span> to gain practical experience in the field of accounting.",
    ],
  },
];

const portfolio = [
  {
    name: "Auth autentification",
    description: "A project using autentification",
    image: oscs,
    lien: "https://task2-0.vercel.app/signup",
  },
  {
    name: "Dev Notes",
    description: "Inside the app where you can see an basic crud application",
    image: devnotes,
    lien: "https://task2-0.vercel.app/signin",
  },
  {
    name: "Weather App",
    description: "Using OpenWeather api to render weather where you are",
    image: algorithms,
    lien: "https://weather-app-fixed.vercel.app",
  },
];

export { experiences, portfolio };
