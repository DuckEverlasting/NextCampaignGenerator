const choices = [
    "in the women's bathroom at a nightclub.",
    "in a museum of antiquities.",
    "in a brothel.",
    "in a speed dating club.",
    "in an empty field.",
    "in a cornfield.",
    "in a funeral home.",
    "in the belly of a whale.",
    "in an executioner's cart.",
    "in a murder mystery party.",
    "in the gallows.",
    "in a sinking ship.",
    "in an internet cafe.",
    "in a bath house.",
    "in the drunk tank at the local jail.",
    "in the gates of the afterlife.",
    "in a school playground.",
    "in a plague pit.",
    "in a cruise ship.",
    "in a border crossing.",
    "in a wedding.",
    "in free fall.",
    "in a caravan.",
    "in a high speed train.",
    "in a retirement home.",
    "in a graveyard.",
    "in the grave!",
    "in a futurism festival.",
    "in an underground market.",
    "in a sports riot.",
    "in a chariot race.",
    "in a colosseum.",
    "in a wrestling match.",
    "in a witch's hut.",
    "in a cave under the sea.",
    "in a tavern, i guess.",
    "around the dinner table, piled high with books and dice.",
    "aboard a space station.",
    "in a stall at a bazaar.",
    "at an underground poker game.",
    "in rural Maine.",
    "in a hostage situation.",
    "in a community storm shelter.",

];

function getChoice() {
    choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector("#textGoHere").textContent = "Your next campaign begins " + choice;
}

getChoice();
