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
    "on a cruise ship.",
    "at a border crossing.",
    "at a wedding.",
    "in free fall.",
    "in a caravan.",
    "on a high speed train.",
    "in a retirement home.",
    "in a graveyard.",
    "in the grave!",
    "at a futurism festival.",
    "in an underground market.",
    "at a sports riot.",
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
    "in a haunted forest.",
    "in a bustling city market.",
    "in a sunken temple.",
    "in an underground cave system.",
    "in a frozen wasteland.",
    "in an abandoned castle.",
    "in a mysterious desert oasis.",
    "in a dark and treacherous swamp.",
    "in a cursed tomb.",
    "in a massive underground city.",
    "in a thriving jungle village.",
    "in a besieged fortress.",
    "in another world realm.",
    "in a hidden underground laboratory.",
    "in a giant treehouse.",
    "in a pirate's cove.",
    "on a massive floating city.",
    "in an eerie graveyard.",
    "in a massive, ancient library.",
    "in a sunken shipwreck.",
    "in a secret underground bunker.",
    "on a hot air balloon.",
    "in a circus tent.",
    "in a futuristic city.",
    "on a deserted island.",
    "in a forbidden temple.",
    "in a time travel experiment gone wrong.",
    "in a haunted mansion.",
    "in a post-apocalyptic wasteland.",
    "in a casino heist.",
    "in a virtual reality game.",
    "in a gladiator arena.",
    "in a hidden forest shrine.",
    "on a flying carpet.",
    "in a top-secret government facility.",
    "on a frozen tundra.",
    "in a dystopian society.",
    "in a massive concert venue.",
    "at a remote mountain lodge.",
    "on a steam-powered airship.",
    "in a decaying mansion.",
    "at a dark crossroads.",
    "on a misty moor.",
    "in a forgotten cemetery.",
    "at an abandoned abbey.",
    "in a haunted asylum.",
    "on a ghost ship.",
    "in a cursed village.",
    "in an ancient tomb.",
    "in a shadowy forest.",
    "at a sinister carnival.",
    "in a forbidden bookshop.",
    "in a spectral castle.",
    "in a mist-shrouded graveyard.",
    "in a cursed mirror.",
    "at a funeral parlor.",
    "on a moonless night.",
    "in a forgotten dungeon.",
    "in a cobwebbed crypt.",
    "in a forbidden laboratory.",
    "in a derelict lighthouse.",
    "in a macabre theater.",
    "in a decrepit mausoleum.",
    "in a cursed painting.",
    "on a haunted hilltop.",
    "in a secret underground catacomb.",
    "at a desolate train station.",
    "in a spectral ballroom.",
    "in a ruined church.",
    "on a moonlit bridge."
    "in the cockpit of a plane mid-flight.",
    "at a drive-in movie theater.",
    "in a sauna at a fitness center.",
    "in a photo booth at a wedding.",
    "in the audience at a stand-up comedy show.",
    "in a meditation retreat.",
    "in a sports stadium during a game.",
    "at a carnival on a Ferris wheel.",
    "in a wine tasting event.",
    "at a protest march.",
    "in a treehouse in the forest.",
    "at a rooftop party overlooking the city.",
    "in a submarine exploring the ocean depths.",
    "in a sensory deprivation tank.",
    "in a speed dating event.",
    "in a boxing ring at a gym.",
    "at a circus performance.",
    "in a space shuttle orbiting the Earth.",
    "in a virtual reality gaming tournament.",
    "in a paintball arena."
    "on a rollercoaster at an amusement park.",
    "in the middle of a crowded shopping mall.",
    "at a retirement home bingo night.",
    "on a hot air balloon ride.",
    "in a haunted house during a ghost tour.",
    "at a karaoke bar after a few too many drinks.",
    "in a police interrogation room.",
    "on a private jet to a tropical destination.",
    "in the middle of a flash mob.",
    "at a political rally.",
    "at the top of a mountain during a hiking trip.",
    "in a library during a quiet study session.",
    "at a cooking class with a famous chef.",
    "in a recording studio with a famous musician.",
    "in a TV game show audience."
];

function getChoice() {
    choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector("#textGoHere").textContent = "Your next campaign begins " + choice;
}

getChoice();
