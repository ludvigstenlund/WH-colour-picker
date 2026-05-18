const base_button = document.getElementById("base")
const layer_button = document.getElementById("layer")
const shade_button = document.getElementById("shade")
const dry_button = document.getElementById("dry")
const edge_button = document.getElementById("edge")
const technical_button = document.getElementById("technical")
const texture_button = document.getElementById("texture")
const contrast_button = document.getElementById("contrast")

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
document.onclick = getpaints

function togglebase () {
    showbase = !showbase 
    if (showbase) document.getElementById("base").style.backgroundColor = "green";
    else document.getElementById("base").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function togglelayer () {
    showlayer = !showlayer
    if (showlayer) document.getElementById("layer").style.backgroundColor = "green";
    else document.getElementById("layer").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function toggleshade () {
    showshade = !showshade
    if (showshade) document.getElementById("shade").style.backgroundColor = "green";
    else document.getElementById("shade").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function toggledry () {
    showdry = !showdry
    if (showdry) document.getElementById("dry").style.backgroundColor = "green";
    else document.getElementById("dry").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function toggleedge () {
    showedge = !showedge
    if (showedge) document.getElementById("edge").style.backgroundColor = "green";
    else document.getElementById("edge").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function toggletechnical () {
    showtechnical = !showtechnical
    if (showtechnical) document.getElementById("technical").style.backgroundColor = "green";
    else document.getElementById("technical").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function toggletexture () {
    showtexture = !showtexture
    if (showtexture) document.getElementById("texture").style.backgroundColor = "green";
    else document.getElementById("texture").style.backgroundColor = "rgb(243, 243, 243)"; 
}
function togglecontrast () {
    showcontrast = !showcontrast
    if (showcontrast) document.getElementById("contrast").style.backgroundColor = "green";
    else document.getElementById("contrast").style.backgroundColor = "rgb(243, 243, 243)"; 
}