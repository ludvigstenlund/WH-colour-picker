const paintapi = 'https://ludvigstenlund.github.io/WH-colour-API/WH-colour-fullrange'
let resultsdiv = document.getElementById("searchresults");

//knappar
let base_button = document.getElementById("base")
let layer_button = document.getElementById("layer")
let shade_button = document.getElementById("shade")
let dry_button = document.getElementById("dry")
let edge_button = document.getElementById("edge")
let technical_button = document.getElementById("technical")
let texture_button = document.getElementById("texture")
let contrast_button = document.getElementById("contrast")
let filterby = document.getElementById("filter")
let render_button = document.getElementById("render")


let showbase = false
let showlayer = false
let showshade = false
let showdry = false
let showedge = false
let showtechnical = false
let showtexture = false
let showcontrast = false
let filterbytype = true
let filterbycolor = false
let togglebycolor = false

base_button.onclick = togglebase
layer_button.onclick = togglelayer
shade_button.onclick = toggleshade
dry_button.onclick = toggledry
edge_button.onclick = toggleedge
technical_button.onclick = toggletechnical
texture_button.onclick = toggletexture
contrast_button.onclick = togglecontrast
filterby.onclick = filtertoggle
render_button.onclick = render

function togglebase () {showbase = !showbase}
function togglelayer () {showlayer = !showlayer}
function toggleshade () {showshade = !showshade}
function toggledry () {showdry = !showdry}
function toggleedge () {showedge = !showedge}
function toggletechnical () {showtechnical = !showtechnical}
function toggletexture () {showtexture = !showtexture}
function togglecontrast () {showcontrast = !showcontrast}
function filtertoggle () {
  filterbytype = !filterbytype
  filterbycolor = !filterbycolor
  if (filterbytype) {console.log("now filtering by type")}
  else console.log("now filtering by color")
}
function render () {getpaints()}

function getpaints () {
  fetch (paintapi) 
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();

  })
  .then(data => {
    console.log(data);
    output = ""

    for (let i = 0; i < data.payload.length; i++) {
      text = ""
      if (showbase === true && data.payload[i].type === "base") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }

      else if (showlayer === true && data.payload[i].type === "layer") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }

      else if (showshade === true && data.payload[i].type === "shade") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }
      else if (showdry === true && data.payload[i].type === "dry") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }
      else if (showedge === true && data.payload[i].type === "edge") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }
      else if (showtechnical === true && data.payload[i].type === "technical") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }
      else if (showtexture === true && data.payload[i].type === "texture") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }
      else if (showcontrast === true && data.payload[i].type === "contrast") {
        text += data.payload[i].name + ", " + data.payload[i].type
        output += text + "<br>";
      }

      
      console.log(output)

    }
    console.log("adding output to html")
    resultsdiv.innerHTML = output

  })
  .catch(error => {
    console.error('Error:', error);
  });
}


