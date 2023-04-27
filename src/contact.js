import appendHeaderFooterContent from "./header-footer";

const contactMainContent = (function () {
  const mainContent = document.createElement("main");
  const contactHeading = document.createElement("h2");
  contactHeading.textContent = "Contact Details";
  const phoneNo = document.createElement("p");
  phoneNo.textContent = "Phone No: 9X3X6X8X9X";
  const emailId = document.createElement("p");
  emailId.textContent = "Email Id: spicekitchen@masala.com";
  mainContent.append(contactHeading, phoneNo, emailId);

  return { mainContent };
})();

function createContactPage() {
  const contentBox = document.querySelector("#content");
  appendHeaderFooterContent();
  contentBox.insertBefore(
    contactMainContent.mainContent,
    contentBox.children[1]
  );
}

export default createContactPage;
