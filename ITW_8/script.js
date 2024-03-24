document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  };
});
