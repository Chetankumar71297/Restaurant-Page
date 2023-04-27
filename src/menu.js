import appendHeaderFooterContent from "./header-footer";

const menuMainContent = (function createMainContent() {
  const mainContent = document.createElement("main");
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
  mainContent.append(menuHeading, menuList);

  return { mainContent };
})();

function createMenuPage() {
  const contentBox = document.querySelector("#content");
  appendHeaderFooterContent();
  contentBox.insertBefore(menuMainContent.mainContent, contentBox.children[1]);
}

export default createMenuPage;
