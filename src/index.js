import { createHomePage, createHomePageOnFirstLoad } from "./home";
import { headerContent } from "./header-footer";
import "./style.css";
import createMenuPage from "./menu";
import createContactPage from "./contact";

// generate home page in start
createHomePageOnFirstLoad();

// preparing navigation bar to change on click of tabs
const homeTab = headerContent.homeTab;
const menuTab = headerContent.menuTab;
const contactTab = headerContent.contactTab;
homeTab.addEventListener("click", createHomePage);
menuTab.addEventListener("click", createMenuPage);
contactTab.addEventListener("click", createContactPage);
