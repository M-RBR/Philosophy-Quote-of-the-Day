// toggle button event code

const toggleButton = document.getElementById("toggle-button");
const moreText = document.getElementById("more-text");

if (toggleButton && moreText) {
  toggleButton.onclick = function () {
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      toggleButton.innerHTML = "Show Less";
    } else {
      moreText.style.display = "none";
      toggleButton.innerHTML = "Show More";
    }
  };
}
