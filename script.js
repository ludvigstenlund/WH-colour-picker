const paintapi = 'https://ludvigstenlund.github.io/WH-colour-API/WH-colour-fullrange'

//knappar
let base_button = document.getElementById("base")
let layer_button = document.getElementById("layer")
let shade_button = document.getElementById("shade")
let dry_button = document.getElementById("dry")
let edge_button = document.getElementById("edge")
let technical_button = document.getElementById("technical")
let texture_button = document.getElementById("texture")
let contrast_button = document.getElementById("contrast")
let render_button = document.getElementById("render") 

let showbase = false
let showlayer = false
let showshade = false
let showdry = false
let showedge = false
let showtechnical = false
let showtexture = false
let showcontrast = false

base_button.onclick = togglebase
layer_button.onclick = togglelayer
shade_button.onclick = toggleshade
dry_button.onclick = toggledry
edge_button.onclick = toggleedge
technical_button.onclick = toggletechnical
texture_button.onclick = toggletexture
contrast_button.onclick = togglecontrast
render_button.onclick = getpaints

function togglebase () {showbase = !showbase
  console.log(showbase)
}
function togglelayer () {showlayer = !showlayer}
function toggleshade () {showshade = !showshade}
function toggledry () {showdry = !showdry}
function toggleedge () {showedge = !showedge}
function toggletechnical () {showtechnical = !showtechnical}
function toggletexture () {showtexture = !showtexture}
function togglecontrast () {showcontrast = !showcontrast}

function createpaintdiv (name, type, group) {
  let div = document.createElement('div');
  div.classList.add('aResult');
  div.classList.add(group)
  let text = document.createTextNode(name + "\n\n type: " + type + "\n color: " + group);
  div.appendChild(text);
  document.getElementById("results").appendChild(div);
}

function getpaints () {
  document.getElementById("results").innerHTML = "" //tömmer diven "results" när getpaints kallas på
  fetch (paintapi) //hänmtar paintapi

  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json()
  })

  .then(data => {
    console.log(data);

    for (let i = 0; i < data.payload.length; i++) {

      if (showbase === true && data.payload[i].type === "base") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showlayer === true && data.payload[i].type === "layer") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showshade === true && data.payload[i].type === "shade") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showdry === true && data.payload[i].type === "dry") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showedge === true && data.payload[i].type === "edge") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showtechnical === true && data.payload[i].type === "technical") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showtexture === true && data.payload[i].type === "texture") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}

      else if (showcontrast === true && data.payload[i].type === "contrast") {
        createpaintdiv(data.payload[i].name, data.payload[i].type, data.payload[i].colorGroup)}
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


