var searchIcon = document.getElementById("search");
var searchItems = document.getElementById("searchI");
function convert() {
  if (searchIcon.classList.contains("fa-magnifying-glass")) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
    searchItems.style.display = "block";
  } else {
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.classList.remove("fa-xmark");
    searchItems.style.display = "none";
  }
}
