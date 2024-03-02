var foodBowl = document.getElementById("food");
var bed = document.getElementById("bed");
var yarn = document.getElementById("yarn");
var catReaction = document.getElementById("catreact");
var kitty = document.getElementById("kitty")
var instructions = document.getElementById("instruction")


foodBowl.onclick = function () {
    catReaction.innerText = "nom....nom....nom....meoww"
    kitty.src = "kittyeat.png"
    instructions.innerText = "your pet is Very Full and Loves Its Food!!!!"
}

bed.onclick = function () {
    catReaction.innerText = "snzzzzz..."
    kitty.src = "kittysleep.png"
    instructions.innerText = "your pet is Sound Asleep and is dreaming beautiful things....."
}

yarn.onclick = function () {
    catReaction.innerText = "meowww!!!!!!!"
    kitty.src = "kittyplay.png"
    instructions.innerText = "your pet is Playing til it drops.. might wanna give it some rest"
}