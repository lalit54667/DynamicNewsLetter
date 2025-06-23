console.log("Festival Popup Loaded");

function closeFestivalPopup() {
  document.getElementById("festivalPopup").style.display = "none";
  localStorage.setItem("popupClosed", "true");
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("popupClosed") !== "true") {
    document.getElementById("festivalPopup").style.display = "block";
  }
});
