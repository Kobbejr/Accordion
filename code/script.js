// Funktion som lägger till och tar bort klassen "active" på den sektion du klickar på.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Väljer ett HTML-element med id "section1" och lägger till eventlyssnare för att anropa toggle-funktionen när det klickas.
// const section1Element = document.getElementById("section1");
// section1Element.addEventListener("click", toggle);

// Väljer ett HTML-element med id "section2" och lägger till eventlyssnare för att anropa toggle-funktionen när det klickas.
// const section2Element = document.getElementById("section2");
// section2Element.addEventListener("click", toggle);

// Väljer ett HTML-element med id "section3" och lägger till eventlyssnare för att anropa toggle-funktionen när det klickas.
// const section3Element = document.getElementById("section3");
// section3Element.addEventListener("click", toggle);

// Väljer alla element med klassen "title" och lägger till eventlyssnare för att anropa toggle-funktionen när det klickas.
const titleElements = document.querySelectorAll(".title");

titleElements.forEach(function (title) {
  title.addEventListener("click", toggle);
});
