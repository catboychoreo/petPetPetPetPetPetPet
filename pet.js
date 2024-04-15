var foodBowl = document.getElementById("food");
var bed = document.getElementById("bed");
var yarn = document.getElementById("yarn");
var catReaction = document.getElementById("catreact");
var kitty = document.getElementById("kitty")
var instructions = document.getElementById("instruction")

var grabbedItem = "grab something..."

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
    grabbedItem = ev.target.id
}

function drop(ev, el) {
    console.log(ev);
    ev.preventDefault();
    var thing = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(thing));

    if (grabbedItem == "food") {
        catReaction.innerText = "nom....nom....nom....meoww"
        kitty.src = "kittyeat.png"
        instructions.innerText = "your pet is Very Full and Loves Its Food!!!!"
    } else if (grabbedItem == "bed") {
        catReaction.innerText = "snzzzzz..."
        kitty.src = "kittysleep.png"
        instructions.innerText = "your pet is Sound Asleep and is dreaming beautiful things....."
    } else if (grabbedItem == "yarn") {
        catReaction.innerText = "meowww!!!!!!!"
        kitty.src = "kittyplay.png"
        instructions.innerText = "your pet is Playing til it drops.. might wanna give it some rest"
    }
}
