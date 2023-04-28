const headerContent = (function createHeader() {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.classList.add("name");
  heading.textContent = "Spice kitchen";
  const navigation = document.createElement("nav");
  const tabContainer = document.createElement("ul");
  navigation.appendChild(tabContainer);
  const homeTab = document.createElement("li");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("li");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("li");
  contactTab.textContent = "Contact";
  tabContainer.append(homeTab, menuTab, contactTab);
  header.append(heading, navigation);

  return { header, homeTab, menuTab, contactTab };
})();

const footerContent = (function createFooter() {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.innerHTML = "&#169; 2023 Spice kitchen";
  footer.appendChild(footerText);

  return { footer };
})();

function appendHeaderFooterContent() {
  const contentBox = document.querySelector("#content");
  contentBox.append(headerContent.header, footerContent.footer);
}

export { appendHeaderFooterContent, headerContent };
