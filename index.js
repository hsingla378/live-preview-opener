const frontendBtn = document.getElementById("frontend-btn");
const backendBtn = document.getElementById("backend-btn");
const copyBtn = document.getElementById("copy-btn");
const inputBox = document.getElementById("input-box");

let currentURL;
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  currentURL = tabs[0].url;

  const extractedLink = currentURL.split(".vm")[0];
  const replacedLink = extractedLink.replaceAll("-", ".");

  frontendBtn.addEventListener("click", () => {
    if (!currentURL.includes("vm-workspace.crio.do")) {
      alert("Bhakk! It's not Workspace!");
      return;
    }

    const frontendLink = (replacedLink + ":8081").replace(
      "https://",
      "http://"
    );
    window.open(frontendLink, "_blank");
  });

  backendBtn.addEventListener("click", () => {
    if (!currentURL.includes("vm-workspace.crio.do")) {
      alert("Bhakk! It's not Workspace!");
      return;
    }

    const backendLink = (replacedLink + ":8082").replace("https://", "http://");
    window.open(backendLink, "_blank");
  });

  copyBtn.addEventListener("click", () => {
    if (!currentURL.includes("vm-workspace.crio.do")) {
      alert("Bhakk! It's not Workspace!");
      return;
    }

    const copiedLink = (replacedLink + ":8082").replace("https://", "http://");
    navigator.clipboard.writeText(copiedLink);
    copyBtn.textContent = "Copied!";
    // window.open(backendLink, "_blank");
  });
});
