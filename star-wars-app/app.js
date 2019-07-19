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
////////////////////////////////////////
//DATASET OBJECT CONTAINING ANSWER URLS
///////////////////////////////////////
//any false data value means the answer was not found in dataset or the answer is
//not a name or contains multiple names
const datasetAnswers = {
  easy: {
    q1: "people/44/",
    q2: "people/11/",
    q3: "planets/8/",
    q4: "people/51/",
    q5: "people/10/",
    q6: "planets/10/",
    q7: "people/10/",
    q8: false,
    q9: "species/12/",
    q10: false,
    q11: "people/27/",
    q12: "people/25/",
    q13: "people/11/",
    q14: "planets/5/",
    q15: "starships/9/",
    q16: "planets/7/",
    q17: "planets/2/",
    q18: "species/9/",
    q19: "people/6/",
    q20: "people/21/",
    q21: false,
    q22: "planets/61/",
    q23: "people/13/",
    q24: false,
    q25: "people/5/",
    q26: false,
    q27: "people/20/",
    q28: false,
    q29: "people/84/",
    q30: "people/88/"
  },
  medium: {
    q1: "people/67/",
    q2: "people/62/",
    q3: false,
    q4: false,
    q5: "people/41/",
    q6: "True",
    q7: "people/14/",
    q8: false,
    q9: "people/11/",
    q10: "people/1/",
    q11: false,
    q12: false,
    q13: "people/15/",
    q14: false,
    q15: false,
    q16: false,
    q17: false,
    q18: false,
    q19: "planets/5/",
    q20: false,
    q21: false,
    q22: false,
    q23: false,
    q24: "people/84/",
    q25: "people/5/",
    q26: false,
    q27: false,
    q28: false,
    q29: false,
    q30: false
  },
  hard: {
    q1: false,
    q2: "vehicles/38/",
    q3: false,
    q4: false,
    q5: "people/33/",
    q6: false,
    q7: false,
    q8: "people/73/",
    q9: false,
    q10: false,
    q11: false,
    q12: false,
    q13: false,
    q14: "vehicles/18/",
    q15: "people/26/",
    q16: "people/45/",
    q17: "people/16/",
    q18: false,
    q19: "people/30",
    q20: "starships/11/",
    q21: false,
    q22: false,
    q23: false,
    q24: false,
    q25: false,
    q26: false, /*can probably find this species*/
    q27: false,
    q28: false,
    q29: false,
    q30: false
  }
}
/////////////////////////////////
//GLOBAL VARIABLES BESIDES ARRAYS
////////////////////////////////
//variable to hold any answer no matter what answer. Variable is a STRING
let answer;
//variable to hold any url to be added/concatenated to the url in AJAX call
let urlAddText;
//variable to hold a indexNumber that will increment through every question and answer
//when the user clicks the next question button
let indexNumber = 0;
let triviaState = false;
/////////////////////////
//EVENT HANDLERS
////////////////////////
//this function when called will assign the answers to the radio button labels for each question
const assignAnswers = () => {
  if ($('#easyButton').text() === 'Selected') {
    $('#answerText1').text($easyAnswerA);
    $('#answerText2').text($easyAnswerB);
    $('#answerText3').text($easyAnswerC);
    $('#answerText4').text($easyAnswerD);
  } else if ($('#mediumButton').text() === 'Selected') {
    $('#answerText1').text($mediumAnswerA);
    $('#answerText2').text($mediumAnswerB);
    $('#answerText3').text($mediumAnswerC);
    $('#answerText4').text($mediumAnswerD);
  } else if ($('#hardButton').text() === 'Selected') {
    $('#answerText1').text($hardAnswerA);
    $('#answerText2').text($hardAnswerB);
    $('#answerText3').text($hardAnswerC);
    $('#answerText4').text($hardAnswerD);
  }
}
//difficulty fuction that will determine if user can start the trivia  by showing the
//question button
const difficulty = () => {
  if ($('#easyButton').text() === 'Selected' || $('#mediumButton').text() === 'Selected' || $('#hardButton').text() === 'Selected') {
    return true;
  } else {
    return false;
  }
}
//display instructions function in a modal (show the modal)
const instructions = (event) => {

}
//this function changes the text of the easy button to 'selected'.
//If it is already selected, change it back to EASY.
const easyDifficulty = (event) => {
  $('#mediumButton').text('MEDIUM');
  $('#hardButton').text('HARD');
  if ($('#easyButton').text() === 'Selected') {
    $('#easyButton').text('EASY');
  } else {
    $('#easyButton').text('Selected');
  }
}
//this function changes the text of the medium button to 'selected'.
//If it is already selected, change it back to MEDIUM.
//also changes other button text in the event another button is selected
const mediumDifficulty = (event) => {
  $('#easyButton').text('EASY');
  $('#hardButton').text('HARD');
  if ($('#mediumButton').text() === 'Selected') {
    $('#mediumButton').text('MEDIUM');
  } else {
    $('#mediumButton').text('Selected');
  }
}
//this function changes the text of the hard button to 'selected'.
//If it is already selected, change it back to HARD.
//also changes other button text in the event another button is selected
const hardDifficulty = (event) => {
  $('#easyButton').text('EASY');
  $('#mediumButton').text('MEDIUM');
  if ($('#hardButton').text() === 'Selected') {
    $('#hardButton').text('HARD');
  } else {
    $('#hardButton').text('Selected');
  }
}
////////////////////////////////
//AJAX SETUP AND TRIVIA LINKING
///////////////////////////////
$('#startGameButton').on('click', (event) => {
  $.ajax({
    url: 'https://swapi.co/api/',
    type: "GET"
  }).then( (data) => {
    console.log(data);
    //create the question variable to be displayed to be used different difficulty button listeners
    let $question = $('<div>').appendTo($('.questionDisplay'));
    $question.addClass('.questionText');
    let $easyAnswerA = answerArrayEasy[indexNumber][0];
    let $easyAnswerB = answerArrayEasy[indexNumber][1];
    let $easyAnswerC = answerArrayEasy[indexNumber][2];
    let $easyAnswerD = answerArrayEasy[indexNumber][3];
    let $mediumAnswerA = answerArrayMedium[indexNumber][0];
    let $mediumAnswerB = answerArrayMedium[indexNumber][1];
    let $mediumAnswerC = answerArrayMedium[indexNumber][2];
    let $mediumAnswerD = answerArrayMedium[indexNumber][3];
    let $hardAnswerA = answerArrayHard[indexNumber][0];
    let $hardAnswerB = answerArrayHard[indexNumber][1];
    let $hardAnswerC = answerArrayHard[indexNumber][2];
    let $hardAnswerD = answerArrayHard[indexNumber][3];

    //easy difficulty/////////////////////////////////////////////////////////
    if ($('#easyButton').text() === 'Selected'){
      //assign question 1 of easy array to question.text
      //display first question.
      if (indexNumber === 0) {
        $question.text(questionArrayEasy[indexNumber]);
        console.log($question);
      }
      $('#questionButton').on('click', (event) => {
        if (indexNumber < questionArrayEasy.length){
          indexNumber++;
          $question.text(questionArrayEasy[indexNumber]);
          $('#answerText1').text($easyAnswerA);
          $('#answerText2').text($easyAnswerB);
          $('#answerText3').text($easyAnswerC);
          $('#answerText4').text($easyAnswerD);
        }
      })      // for (let i = 0; i < )
    } //medium difficulty/////////////////////////////////////////////////////
    else if ($('#mediumButton').text() === 'Selected'){
      if (indexNumber === 0) {
        $question.text(questionArrayMedium[indexNumber]);
        console.log($question);
      }
      $('#questionButton').on('click', (event) => {
        if (indexNumber < questionArrayMedium.length){
          indexNumber++;
          $question.text(questionArrayMedium[indexNumber]);
        }
      })      // for (let i = 0; i < )
    } //hard difficulty //////////////////////////////////////////////////////
    else if ($('#hardButton').text() === 'Selected'){
      if (indexNumber === 0) {
        $question.text(questionArrayHard[indexNumber]);
        console.log($question);
      }
      $('#questionButton').on('click', (event) => {
        if (indexNumber < questionArrayHard.length){
          indexNumber++;
          $question.text(questionArrayHard[indexNumber]);
        }
      })      // for (let i = 0; i < )
    }
  },
  (error) => {
    console.log(error);
  });
});
//////////////////////////
//EVENT LISTENERS
/////////////////////////
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
