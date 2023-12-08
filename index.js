const frontendBtn = document.getElementById("frontend-btn");
const backendBtn = document.getElementById("backend-btn");
const inputBox = document.getElementById("input-box");

frontendBtn.addEventListener("click", () => {
  //   console.log("test1", Window.location);
  //   console.log("test2", chrome.webNavigation);
  const link = inputBox.value;
  if (!link) {
    alert("Please enter the Workspace URL");
    return;
  }

  const extractedLink = link.split(".vm")[0];

  const replacedLink = extractedLink.replaceAll("-", ".");

  const frontendLink = (replacedLink + ":8081").replace("https://", "http://");
  window.open(frontendLink, "_blank");
  //   console.log(frontendLink);
});

backendBtn.addEventListener("click", () => {
  const link = inputBox.value;

  if (!link) {
    alert("Please enter the Workspace URL");
    return;
  }

  const extractedLink = link.split(".vm")[0];

  const replacedLink = extractedLink.replaceAll("-", ".");

  const backendLink = (replacedLink + ":8082").replace("https://", "http://");
  window.open(backendLink, "_blank");
  //   console.log(frontendLink);
});
