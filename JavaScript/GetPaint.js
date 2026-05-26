const paintapi = 'https://ludvigstenlund.github.io/WH-colour-API/WH-colour-fullrange'; //paint API från min githib pages

let searchTerm = ""; //skapar tom STR 

function filterByName(event) { //filtrerar efter vad som är skrivet i sökfältet
  searchTerm = event.target.value; //gör söktermen hanterbar för javascript
  console.log(searchTerm);
  getpaints(); //anropar getpaints
}

function createpaintdiv (name, type, group) { //skapar div för varje enskild färg som ska visas
  if (name.toLowerCase().includes(searchTerm.toLowerCase())) { //kollar om sökningen finns i färgnamnet
    let div = document.createElement('div'); //skapar div
    div.classList.add('aResult'); //lägger till klass till diven
    div.classList.add(group); //lägger till färgen som en klass
    let text = document.createTextNode(name + "\n\n type: " + type + "\n color: " + group); //strukturerar divens innehåll
    div.appendChild(text);
    document.getElementById("results").appendChild(div);
  }
}

function getpaints () { //funktionen som hämtar json-fil som API från github pages
  document.getElementById("results").innerHTML = ""; //tömmer diven "results" när getpaints kallas på
  fetch (paintapi) //hänmtar paintapi

  .then(response => {
    if (!response.ok) { //om något fel uppstår:
      throw new Error('Network response was not ok');
    }
    return response.json();
  })

  .then(data => { //om allt går bra:
    console.log(data);

    for (let i = 0; i < data.payload.length; i++) { //för varje färg i payload

      if (showbase === true && data.payload[i].type === "base") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);} //anropar funktionen createpaintdiv.

      else if (showlayer === true && data.payload[i].type === "layer") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}

      else if (showshade === true && data.payload[i].type === "shade") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}

      else if (showdry === true && data.payload[i].type === "dry") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}

      else if (showedge === true && data.payload[i].type === "edge") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}

      else if (showtechnical === true && data.payload[i].type === "technical") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}

      else if (showtexture === true && data.payload[i].type === "texture") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}

      else if (showcontrast === true && data.payload[i].type === "contrast") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup);}
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}