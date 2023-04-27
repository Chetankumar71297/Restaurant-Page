import appendHeaderFooterContent from "./header-footer";

const homeMainContent = (function createMainContent() {
  const mainContent = document.createElement("main");
  const heroContent = document.createElement("div"); //.setAttribute("id", "hero");
  const heroHeading = document.createElement("h2");
  heroHeading.textContent = "Welcome to our Indian restaurant!";
  const heroText = document.createElement("p");
  heroText.textContent =
    "We offer a wide range of delicious Indian cuisine, including vegetarian and non-vegetarian options. Come dine with us today!";
  heroContent.append(heroHeading, heroText);

  const menuContent = document.createElement("div");
  const menuHeading = document.createElement("h2");
  menuHeading.textContent = "Our Menu";
  const menuList = document.createElement("ul");
  const dish1 = document.createElement("li");
  dish1.textContent = "Chicken Tikka Masala";
  const dish2 = document.createElement("li");
  dish2.textContent = "Naan Bread";
  const dish3 = document.createElement("li");
  dish3.textContent = "Pakora";
  const dish4 = document.createElement("li");
  dish4.textContent = "Biryani";
  menuList.append(dish1, dish2, dish3, dish4);
  menuContent.append(menuHeading, menuList);

  mainContent.append(heroContent, menuContent);

  return { mainContent };
})();

function createHomePage() {
  const contentBox = document.querySelector("#content");
  appendHeaderFooterContent();
  contentBox.insertBefore(homeMainContent.mainContent, contentBox.children[1]);
}

export default createHomePage;
