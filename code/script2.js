// En funktion som lägger till och tar bort klassen "active" på sektionen du klickar på.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Välj alla element med klassen "title" och lägg till toggle-funktionen på varje
const titleElements = document.querySelectorAll(".title");

titleElements.forEach(function (title, index) {
  title.addEventListener("click", toggle);

  // Lägg till en "even" klass för att alternera .title-element
  if (index % 2 !== 0) {
    title.classList.add("even");
  }
});

// Hämta data från API:et
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Kontrollera om svarsstatusen är OK
    if (!response.ok) {
      throw new Error(`HTTP-fel! Status: ${response.status}`);
    }

    // Parsa JSON i svaret
    return response.json();
  })
  .then((data) => {
    // Hantera datan

    // Antag att `data` är en array med objekt med egenskaperna 'title' och 'body'
    data.forEach((post, index) => {
      // Skapa en sektionsdiv med klassen 'title'
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "title";
      sectionDiv.textContent = post.title;

      // Skapa en pildiv med klassen 'arrow' och lägg till den som ett barn till sektionsdiv
      const ArrowDiv = document.createElement("div");
      ArrowDiv.className = "arrow";
      sectionDiv.appendChild(ArrowDiv);

      // Lägg till en "even" klass för att alternera .title-element
      if (index % 2 !== 0) {
        sectionDiv.classList.add("even");
      }

      // Skapa en beskrivningsdiv med klassen 'description'
      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description";
      descriptionDiv.textContent = post.body;

      // Lägg till sektions- och beskrivningsdivarna i FAQ-sektionen
      const faqSection = document.querySelector(".accordion");
      faqSection.appendChild(sectionDiv);
      faqSection.appendChild(descriptionDiv);

      // Lägg till en eventlyssnare på sektionsdiven
      sectionDiv.addEventListener("click", toggle);
    });
  });
