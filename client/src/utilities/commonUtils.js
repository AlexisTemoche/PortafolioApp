import { Home } from "../PortfolioContainer/Home/Home";
import { AboutMe } from "../PortfolioContainer/AboutMe/AboutMe";
import { Resume } from "../PortfolioContainer/Resume/Resume";
import { Projects } from "../PortfolioContainer/Projects/Projects";
import { ContactMe } from "../PortfolioContainer/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    screen_title: "Inicio",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    screen_title: "Acerca de mi",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    screen_title: "Curriculum vitae",
    component: Resume,
  },
  {
    screen_name: "Projects",
    screen_title: "Proyectos",
    component: Projects,
  },
  {
    screen_name: "ContactMe",
    screen_title: "Contáctame",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
