/////////////////////////////////////////////////////////////////////////////
//STAR WARS QUESTION AND ANSWER SECTION
// - All Star Wars questions (and their difficulty)
// -including answers, taken from:
// - https://hubpages.com/entertainment/Best-Star-Wars-Questions-and-Answers
/////////////////////////////////////////////////////////////////////////////
const questionArrayEasy = [
  "In Episode 1, which Sith uses a double-bladed red lightsaber?",
  "Who built C-3PO?",
  "What planet do Padme, Palpatine, and Jar-Jar represent in the Senate?",
  "Which Jedi Master uses a purple lightsaber?",
  "Who is Anakin's primary Jedi mentor?",
  "What rain-filled planet does Obi-Wan tour the cloning facilities of?",
  "Who kills General Grievous?",
  "What is the name of Count Dooku's political faction that leaves the Republic?",
  "What species is Jar-Jar Binks?",
  "During his battle against Obi-Wan, how many lightsabers does General Grievous use, and what colors were they?",
  "Who famously exclaims 'It's a trap!'?",
  "Who is the administrator of Cloud City on the planet Bespin?",
  "Luke Skywalker's first blue lightsaber originally belonged to whom?",
  "Luke trains under Yoda on which swamplike planet?",
  "What is the name of the Empire's planet-destroying space station?",
  "To destroy the second Death Star, Han Solo leads a strike team to disable its shield generator on the forest moon of _____.",
  "Princess Leia is from ____, the peaceful planet the Death Star destroys.",
  "Which forest tribe mistakes C-3PO for a deity?",
  "Luke's aunt is Beru Lars; who is his uncle?",
  "Who rules the Empire?",
  "Who are Kylo Ren's parents?",
  "Rey is a scavenger on which planet?",
  "Which character shoots Kylo Ren after he kills Han Solo?",
  "In Episode 7, who commands the First Order?",
  "Who leads the REsistance as its general?",
  "What prompted Luke to enter exile?",
  "Who visits Luke before he attempts to burn the Jedi library on Ahch-To?",
  "Who stops Finn from completing his suicide run on the planet Crait?",
  "Who first engages Kylo Ren in a lightsaber duel outside Starkiller Base?",
  "Which female First Order officer wears a metallic suit?"
];
const questionArrayMedium = [
  "Who was Qui-Gon Jinn's former Jedi Master?",
  "Which Tatooine moisture farmer does Shmi Skywalker marry?",
  "What is Count Dooku's Sith title?",
  "Which female bounty hunter assists Jango Fett?",
  "Who is Anakin's Dug-species Podracing rival?",
  "True or False: Jar-Jar Binks appears in Episode 3: Revent of the Sith.",
  "Out of Luke, Han, Leia, and Chewbacca, which character does not appear in the prequel trilogy?",
  "Palpatine/Darth Sidious issues Order number ___ to have the Clone Troopers betray the Jedi.",
  "Who slices of Mace Windu's hand shortly before his death?",
  "Which of Padme's twins is born first?",
  "Han Solo made the Kessel Run in less than how many parsecs?",
  "Which group of mask-clad desert-dwellers attacks Luke shortly before he meets Obi-Wan ono Tatooine?",
  "Who is the Rodian bounty hunter that attempts to apprehend Han in the Mos Eisley Cantina?",
  "Which two bounty hunters (other than Boba Fett) were hired by Vader to find the Rebels in Episode 5.",
  "C-3PO claims to be fluent in over how many forms of communication?",
  "What type of droid is R2-D2?",
  "What is the name of Jabba's monster that devours its victims over the span of a thousand years?",
  "What creature drags Luke to its lair on the ice world of Hoth?",
  "Technically, Luke's first shown lighsaber duel occurs where?",
  "What is the name of Boba Fett's (and previously Jango's) ship?",
  "Who offers Rey Luke's (and Anakin's) old lightsaber?",
  "Why does Rey attack Finn upon meeting him?",
  "What large, tentacled animals attack the gangs Han barters with?",
  "Who tends to Chewie after his blaster wound?",
  "Which character saves herself from outer space's atmosphere using the Force?",
  "Who sacrifices herself by ramming her ship at lightspeed into the First Order's fleet?",
  "What type of ship do Finn and Poe use to escape First Order custody?",
  "Not counting Snoke and Ren, who is the primary (and, according to Poe, 'pasty') general of the First Order?",
  "Ignoring Leia's order to retreat, Poe directs his team to attack what type of First Order starship?",
  "Who is Rose Tico's sister?"
];
const questionArrayHard = [
  "Before Palpatine, who is the Supreme Chancellor of the Republic Senate?",
  "What is the name of the transport Qui-Gon, Obi-Wan, and Jar-Jar use to navigate Naboo's planet core?",
  "Obi-Wan discovers Anakin's midi-chlorian count is over what value?",
  "During her time as Queen of Naboo, who is Padme's appointed captain?",
  "What is the full name of the Neimoidian who leads the Trade Federation?",
  "What drink does Obi-Wan politely reject at Dex's diner?",
  "In the Geonosian arena, what tiger-like animal attacks Padme?",
  "Who is Obi-Wan's female alien guide through the Kamino cloning facility?",
  "During his clash against the Separatists on Utapau, Obi-Wan rides a female varactyl; what was her name?",
  "In the conclusion to their epic duel, Obi-Wan dismembers three of Anakin's limbs; which one doesn't get severed?",
  "In the Battle of Yavin, Wedge Antilles holds which number in Red Squadron?",
  "What species are the big-headed musicians in the Mos Eisley cantina?",
  "What animal does Obi-Wan imitate to scare off the Tusken Raiders on Tatooine?",
  "The turtle-like Imperial AT-AT walkers are used to great effect on Hoth; what does AT-AT stand for?",
  "What is the name of Lando's part-cyborg assistant in Cloud City?",
  "Who is Jabba's Twi'lek aide?",
  "What is Jabba the Hutt's full name?",
  "What song does the Max Rebo band sing for Jabba the Hutt?",
  "What is the name of the first Ewok Leia befriends?",
  "In the assault on the original Death Star, Luke pilots an X-wing and Han flies the Millenium Falcon, but what other type of Rebel ship was used?",
  "The stormtrooper who leaves a bloody handprint on Finn's helmet was numbered FN-2003, but what was his nickname?",
  "Upon seeing the Guavian Death Gang, Han realizes they must have tracked him from which planet?",
  "Who is the mysterious old man who seemingly knows Kylo Ren's identity at the start of Episode 7?",
  "Which First Order Captain dies aboard his Dreadnaught to the Resistance's bombs?",
  "Kylo Ren pilots a unique spacecraft called the TIE _____.",
  "During his exile, Luke harvest green milk from a female animal of what species?",
  "Hacker DJ betrays Finn and Rose to the First Order, what does DJ stand for?",
  "Similar to the Empire's Royal Guards, which red-clad First Order troops did Rey and Kylo Ren team up to defeat?",
  "Female pilot Captain _____ serves as the Resistance's Blue Leader.",
  "What is the name of the stable boy who helps Rose and Finn ride the Fathiers?"
]
const answerArrayEasy = [
  /*Question 1*/["Qui-Gon", "Obi-Wan-Kenobi", /*answer*/"", "Vader"],
  /*Question 2*/["Watta", "Luke Skywalker", "Schmi Skywalker", /*answer*/" "],
  /*Question 3*/[/*answer*/" ", "Tatooine", "Alderaan", "Coruscant"],
  /*Question 4*/["Obi-Wan Kenobi", /*answer*/" ", "Qui-Gon", "Anakin Skywalker"],
  /*Question 5*/["Qui-Gon", /*answer*/" ", "Darth Sidious", "Mace Windu"],
  /*Question 6*/["Kashyyk", "Yavin 4", "Endor", /*answer*/" "],
  /*Question 7*/["Mace Windu", "Yoda", /*answer*/" ", "Anakin Skywalker"],
  /*Question 8*/[/*answer*/" ", "The Empire", "The New Republic", "The Separatist Regime"],
  /*Question 9*/[/*answer*/" ", "Neimodian", "Noobian", "Mon Calamari"],
  /*Question 10*/["Six: Red, Green, Purple, Blue,  Yellow, Orange", "Four: 2 Blue, 1 Green, and 1 Yellow", "Four: 1 Blue, 2 Green, 1 Yellow", /*answer*/" "],
  /*Question 11*/["Captain Hull", "Lando Calrissian", /*answer*/" ", "Han Solo"],
  /*Question 12*/["Owen Lars", "Emperor Palpatine", "Lobot", /*answer*/" "],
  /*Question 13*/[/*answer*/" ", "Obi-Wan-Kenobi", "Qui-Gon", "Yoda"],
  /*Question 14*/["Yavin 4", /*answer*/" ", "Alderaan", "Naboo"],
  /*Question 15*/["The Death Moon", /*answer*/" ", "The Dark Star", "The Planet Destroyer"],
  /*Question 16*/["Kashyyk", "Yavin 4", "Alderaan", /*answer*/" "],
  /*Question 17*/["Yavin 4", "Coruscant", /*answer*/" ", "Naboo"],
  /*Question 18*/[/*answer*/" ", "The Gungan", "The Neimodians", "The Wampas"],
  /*Question 19*/[/*answer*/" ", "Ben Lars", "Dax Lars", "Jacob Lars"],
  /*Question 20*/["Darth Vader", "Count Dooku", "Supreme Leader Snokes", /*answer*/" "],
  /*Question 21*/["Anakin and Padme", "Obi-Wan-Kenobi and Satine Kryze", /*answer*/" ", "Hera Syndulla and Kanan Jarrus"],
  /*Question 22*/["Tatooine", "Onderon", "Rishi", /*answer*/" "],
  /*Question 23*/[/*answer*/" ", "Finn", "Rey", "Po Dameron"],
  /*Question 24*/["Darth Sidious", /*answer*/" ", "Kylo Ren", "General Hux"],
  /*Question 25*/["Maz Kanata", /*answer*/" ", "Han Solo", "Admiral Ackbar"],
  /*Question 26*/["Han Solo and Leia's Split", "The loss of his father, Anakin", "To seek out other Jedi", /*answer*/" "],
  /*Question 27*/["Anakin Skywalker", "Obi-Wan Kenobi", /*answer*/" ", "Emperor Palpatine"],
  /*Question 28*/[/*answer*/" ", "Luke Skywalker", "Po Dameron", "Leia Skywalker"],
  /*Question 29*/[/*answer*/" ", "Luke Skywalker", "Rey", "Han Solo"],
  /*Question 30*/["Leuitenant Fazma", "Colonel Dexter", "General Hux", /*answer*/" "],
];
const answerArrayMedium = [
  /*Question 1*/["Yoda", "Mace Windu", /*answer*/" ", "Nozferatu"],
  /*Question 2*/["Owen Lars", "Jacob Lars", "Hector Lars", /*answer*/" "],
  /*Question 3*/[/*answer*/" ", "Darth Plagius", "Darth Sidious", "Darth Revan"],
  /*Question 4*/["Aurra Sing", /*answer*/" ", "IG-88", "Cad Bane"],
  /*Question 5*/["Watta", /*answer*/" ", "Zagir", "Peatou"],
  /*Question 6*/["Do Not Know", "I hate Jar Jar", "False", /*answer*/" "],
  /*Question 7*/["Leia", "Luke", /*answer*/" ", "Chewbacca"],
  /*Question 8*/[/*answer*/" ", "56", "6", "96"],
  /*Question 9*/[/*answer*/" ", "Darth Sidious", "Count Dooku", "Darth Maul"],
  /*Question 10*/["Leia", "Han", "Boba", /*answer*/" "],
  /*Question 11*/["7", "20", /*answer*/" ", "10"],
  /*Question 12*/["Sand People", "Junk Raiders", "Jawas", /*answer*/" "],
  /*Question 13*/[/*answer*/" ", "Leedo", "Guado", "Jeedo"],
  /*Question 14*/["Aurra Sing & Cad Bane", /*answer*/" ", "Cradossk & Cato Parsitti", "Embo & Bossk"],
  /*Question 15*/["600,000", /*answer*/" ", "6,000", "60 million"],
  /*Question 16*/["Repair Droid", "Utility Droid", "Mechanical Droid", /*answer*/" "],
  /*Question 17*/["Yarglat Pit", "Rancor Pit", /*answer*/" ", "Nexu Pit"],
  /*Question 18*/[/*answer*/" ", "Nexu", "Veractyl", "Womps"],
  /*Question 19*/[/*answer*/" ", "Ice Cave on Hoth", "Carbonite Chamaber on Bespin", "Death Star"],
  /*Question 20*/["Fett 1", "Slave 2", "Vengeance 3", /*answer*/" "],
  /*Question 21*/["Finn", "Han Solo", /*answer*/" ", "Chewbacca"],
  /*Question 22*/["BB-8 attacks Rey", "Scavengers attack and Finn stopped them", "BB-8 runs away from finn to Rey", /*answer*/" "],
  /*Question 23*/[/*answer*/" ", "Lizaks", "Manaanites", "Kirboars"],
  /*Question 24*/["Po Dameron", /*answer*/" ", "Rey", "Han Solo"],
  /*Question 25*/["Luke Skywalker", /*answer*/" ", "Rey", "Kylo Ren"],
  /*Question 26*/["General Hux", "Captain Phasma", "Leia", /*answer*/" "],
  /*Question 27*/["Silencer", "TIE Interceptor", /*answer*/" ", "X-Wing"],
  /*Question 28*/[/*answer*/" ", "Admiral Holdo", "Captain Phasma", "Leia Skywalker"],
  /*Question 29*/[/*answer*/" ", "Destroyer", "Cruiser", "Capital Ship"],
  /*Question 30*/["Marge Tico", "Kayla Tico", "Lilly Tico", /*answer*/" "],
];
const answerArrayHard = [
  /*Question 1*/["Mon Motha", "Lux Bonteri", /*answer*/" ", "Mas amedda"],
  /*Question 2*/["Zenga", "Mengi", "Doomba", /*answer*/" "],
  /*Question 3*/[/*answer*/" ", "10,000", "50,000", "8,000"],
  /*Question 4*/["Thorn", /*answer*/" ", "Thire", "Neyo"],
  /*Question 5*/["Ruk Gunray", /*answer*/" ", "Key Gunray", "Jor Gunray"],
  /*Question 6*/["Java Juice", "Bantha Milk", "Death Sticks", /*answer*/" "],
  /*Question 7*/["Ralltiir Tiger", "Cathar", /*answer*/" ", "Vorn Tiger"],
  /*Question 8*/[/*answer*/" ", "Sifo-Dyas", "Kolac Pru", "Lama Su"],
  /*Question 9*/[/*answer*/" ", "Tika", "Bentu", "Jenga"],
  /*Question 10*/["Left Leg", "Right Leg", "Right Arm", /*answer*/" "],
  /*Question 11*/["Red Four", "Red Five", /*answer*/" ", "Red Three"],
  /*Question 12*/["Bentu", "Rodian", "Ithorian", /*answer*/" "],
  /*Question 13*/[/*answer*/" ", "Sand Devil", "Womp Rat", "Rancor"],
  /*Question 14*/["All Traversal Terrain Transport", /*answer*/" ", "Auxiliary Terrain Traversal Transport", "All Terrain Troop Transport"],
  /*Question 15*/["Jidu", /*answer*/" ", "Greedo", "Simba"],
  /*Question 16*/["Oatiw'ramu", "Nor'pidaq", "Fib'bortoma", /*answer*/" "],
  /*Question 17*/["Jabba Skotosh Narra", "Jabba Jildosh Whogresk", /*answer*/" ", "Jabba Brappoosh Broerg"],
  /*Question 18*/[/*answer*/" ", "Desert Winds", "Gungan March", "Mos Espa"],
  /*Question 19*/[/*answer*/" ", "Teebo", "Chirpa", "Logray"],
  /*Question 20*/["A-Wing", "C-Wing", "T-Wing", /*answer*/" "],
  /*Question 21*/["Duke", "Wicket", /*answer*/" ", "Chip"],
  /*Question 22*/["Tatooine", "Jakku", "Rishi", /*answer*/" "],
  /*Question 23*/[/*answer*/" ", "Dud Bolt", "Sio Bibble", "Po Dameron"],
  /*Question 24*/["Captain Loatha Sommover", /*answer*/" ", "Captain Sweitt Concorkill", "Captain Ello Asty"],
  /*Question 25*/["Stunner", /*answer*/" ", "Interceptor", "Stealther"],
  /*Question 26*/["Dianoga", "Sando", "Pug", /*answer*/" "],
  /*Question 27*/["Don't Jive", "Don't Jinx", /*answer*/" ", "Don't Jam"],
  /*Question 28*/[/*answer*/" ", "The Imperial Guards", "The Supreme Guards", "The Elite Guards"],
  /*Question 29*/[/*answer*/" ", "Tarkin", "Utapaun", "Rose"],
  /*Question 30*/["Almec", "Lux Bonteri", "Tobias Beckett", /*answer*/" "],
];
/////////////////////////////////
//GLOBAL VARIABLES BESIDES ARRAYS
////////////////////////////////
//variable to hold any answer no matter what answer. Variable is a STRING
let answer;
//variable to hold any url to be added/concatenated to the url in AJAX call
let urlAddText;
/////////////////////////
//EVENT HANDLERS
////////////////////////

////////////////////////////////
//AJAX SETUP AND TRIVIA LINKING
///////////////////////////////
const ajaxCall = (event) => {
  $.ajax({
    url: 'https://swapi.co/api/',
    type: "GET"
  }).then( (data) => {
    console.log(data);
    //create the question variable to be displayed to be used different difficulty button listeners
    let $question = $('<div>').appendTo($('.questionDisplay'));
    $question.addClass('.questionText');
    //easy difficulty/////////////////////////////////////////////////////////
    if ($('#easyButton').text() === 'Selected'){
      //create a textline that shows which difficulty is selected
      console.log('hi');
        // for (let i = 0; i < )
    } //medium difficulty/////////////////////////////////////////////////////
    else if ($('#mediumButton').text() === 'Selected'){
      //for loops and if statements
    } //hard difficulty //////////////////////////////////////////////////////
    else if ($('#hardButton').text() === 'Selected'){

    }
  },
  (error) => {
    console.log(error);
  });
}
//////////////////////////
//EVENT LISTENERS
/////////////////////////
$('#questionButton').on('click', ajaxCall);
$('#easyButton').on('click', easyDifficulty);
$('#mediumButton').on('click', mediumDifficulty);
$('#hardButton').on('click', hardDifficulty);
$('#instructions').on('click', instructions);
/////////////////////////////
//CODE TO CONSIDER LATER
////////////////////////////

//BELOW CODE IS FOR SUBMITTING THE ANSWER FORM SECTION. CONSIDER USING.
/*var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);*/
