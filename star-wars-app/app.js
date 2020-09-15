//NOTE TO READER - THIS CODE DEPENDS ON OBJECT AND ARRAY ORDER. CHANGING THE
//ORDER OF ANY ARRAY/OBJECT/FUNCTION/ETC. WILL BREAK THE CODE.
/////////////////////////////////////////////////////////////////////////////
//STAR WARS QUESTION AND ANSWER SECTION
// - All Star Wars questions (and their difficulty)
// -including answers, taken from:
// - https://hubpages.com/entertainment/Best-Star-Wars-Questions-and-Answers
/////////////////////////////////////////////////////////////////////////////
//Array containing every question for the Easy Difficulty
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
//Array containing every question for the Medium Difficulty
const questionArrayMedium = [
  "Who was Qui-Gon Jinn's former Jedi Master?",
  "Which Tatooine moisture farmer does Shmi Skywalker marry?",
  "What is Count Dooku's Sith title?",
  "Which female bounty hunter assists Jango Fett?",
  "Who is Anakin's Dug-species Podracing rival?",
  "True or False: Jar-Jar Binks appears in Episode 3: Revenge of the Sith.",
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
//Array containing every question for the Hard Difficulty
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
//Two arrays that will eventually contain the answers selected by the user.
const rightAnswersLog = [];
const wrongAnswersLog = [];
//an array containing the radio button values that are the CORRECT answer for questions. Array Order is important
const correctAnswers = ["C", "D", "A", "B", "B", "D", "C", "A", D", "C", "A", "A", "D", "D", "D", "A", "B", "B", "D", "C", "A", "A", "D"];
////////////////////////////////////////
//DATASET OBJECT CONTAINING ANSWER URLS
///////////////////////////////////////
//any "" data value means the answer was not found in dataset or the answer is
//not a name or contains multiple names
const datasetAnswers = {
  easy: [
    /*1*/"people/44/",
    /*2*/"people/11/",
    /*3*/"planets/8/",
    /*4*/"people/51/",
    /*5*/"people/10/",
    /*6*/"planets/10/",
    /*7*/"people/10/",
    /*8*/"people/10/",
    /*9*/"species/12/",
    /*10*/"people/10/",
    /*11*/"people/27/",
    /*12*/"people/25/",
    /*13*/"people/11/",
    /*14*/"planets/5/",
    /*15*/"starships/9/",
    /*16*/"planets/7/",
    /*17*/"planets/2/",
    /*18*/"species/9/",
    /*19*/"people/6/",
    /*20*/"people/21/",
    /*21*/"people/10/",
    /*22*/"planets/61/",
    /*23*/"people/13/",
    /*24*/"people/10/",
    /*25*/"people/5/",
    /*26*/"people/10/",
    /*27*/"people/20/",
    /*28*/"people/10/",
    /*29*/"people/84/",
    /*30*/"people/88/",
          "people/88/"
  ],
  medium: [
    "people/67/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/41/",
    "people/62/",
    "people/14/",
    "people/62/",
    "people/11/",
    "people/1/",
    "people/62/",
    "people/62/",
    "people/15/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/62/",
    "planets/5/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/84/",
    "people/5/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/62/",
    "people/62/"
  ],
  hard: [
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "people/33/",
    "vehicles/38/",
    "vehicles/38/",
    "people/73/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/18/",
    "people/26/",
    "people/45/",
    "people/16/",
    "vehicles/38/",
    "people/30",
    "starships/11/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/", /*can probably find this species*/
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/",
    "vehicles/38/"
  ]
}
/////////////////////////////////
//GLOBAL VARIABLES BESIDES ARRAYS
////////////////////////////////
//variable to hold a indexNumber that will increment through every question and answer
//when the user clicks the next question button, the indexNumber increments
let indexNumber = 0;
//when user clicks the next question button the answerNumber increments
let answerNumber = 0;
//a variable that will hold the url for the question number to get the right
//answer
let correctAnswersNumber = 0;
//variable that will hold the selected radio button's value
let $selectedAnswer;
let dataSetIndexNumber = 0;
/////////////////////////
//EVENT HANDLERS // FUNCTIONS
////////////////////////
// console.log(datasetAnswers.easy.length);
const dataSetIteration = () => {
  // console.log(dataSetIndexNumber);
  // console.log($('#easyButton').text());
  // console.log(datasetAnswers.easy.length);
  //variable to be used in the dataSetIteration function
  let urlAddText;
  if ($('#easyButton').text() === 'Selected'){
    if (dataSetIndexNumber < datasetAnswers.easy.length) {
      if(datasetAnswers.easy[dataSetIndexNumber] === ""){
        dataSetIndexNumber++;
      } else {
        //grab the first key value pair
        urlAddText = datasetAnswers.easy[dataSetIndexNumber];
        // console.log(urlAddText);
        dataSetIndexNumber++;
        // console.log(dataSetIndexNumber);
      }
    } else {
      dataSetIndexNumber = 0;
    }
  } else if ($('#mediumButton').text() === 'Selected'){
    if (dataSetIndexNumber < datasetAnswers.medium.length) {
      if (datasetAnswers.medium[dataSetIndexNumber] === "") {
        dataSetIndexNumber++;
      } else {
        urlAddText = datasetAnswers.medium[dataSetIndexNumber];
        dataSetIndexNumber++;
      }
    } else {
      dataSetIndexNumber = 0;
    }
  } else if ($('#hardButton').text() === 'Selected'){
    if (dataSetIndexNumber < datasetAnswers.hard.length) {
      if (datasetAnswers.hard[dataSetIndexNumber] === "") {
        dataSetIndexNumber++;
      } else {
        urlAddText = datasetAnswers.hard[dataSetIndexNumber];
        dataSetIndexNumber++;
      }
    } else {
      dataSetIndexNumber = 0;
    }
  } else {
    dataSetIndexNumber = 0;
  }
  return urlAddText;
}
//a function that submits the selected answer and store the value of the radio button in a corresponding array based on whether it is correct.
const answerSubmit = (event) => {
  event.preventDefault();
  $('.questionDisplay').empty();
  $selectedAnswer = $('input[name="answerChoice"]:checked').val();
  console.log($selectedAnswer);
  //if the selected answer is equal to the correct answers array element
  if ($selectedAnswer === correctAnswers[correctAnswersNumber]) {
    rightAnswersLog.push($selectedAnswer);
    console.log(rightAnswersLog);
  } else {
    wrongAnswersLog.push($selectedAnswer);
    console.log(wrongAnswersLog);
  }
  correctAnswersNumber++;
  event.preventDefault();
}
//function that closes the gameOver Modal
const closeModal = (event) => {
  $('#modal').css('display', 'none');
  $('#instructionsModal').css('display', 'none');
}
//display instructions function in a modal (show the modal)
const openInstructions = (event) => {
  console.log($('#instructionsModal'));
  $('#instructionsModal').css('display', 'block');
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
//run the game over function when questions are done
const gameOver = () => {
  $('#modal').css('display', 'block'); //make the modal window visible to the user
  $('#rightAnswers').text(rightAnswersLog.length); //Display the number of right answers to the user
  $('#wrongAnswers').text(wrongAnswersLog.length); //display the number of wrong answers to the user
  if (rightAnswersLog.length <= 5){
    $('#rank').text("That Guy/Gal Who's Never Watched Star Wars"); //The user gets this title
    $('#message').text("Your knowledge of Star Wars is non-existent. You truly need to stop what you are doing now and go watch all star wars films in one sitting.");
  } else if (rightAnswersLog.length > 5 && rightAnswersLog.length <= 10){
    $('#rank').text("Star Wars Noob");
    $('#message').text("You are new to the Star Wars universe. You have a very basic understanding of characters, places, and events.");
  } else if (rightAnswersLog.length > 10 && rightAnswersLog.length <= 15){
    $('#rank').text("Jedi Padawan");
    $('#message').text("You are well on your way to learning the ways of the force. You need more training in wisdom, knowledge, and skill!");
  } else if (rightAnswersLog.length > 15 && rightAnswersLog.length <= 20){
    $('#rank').text("Smuggler Con Artist");
    $('#message').text("You got by on your wits and lucky guesses. You feel mighty important and can con your way past any storm trooper or buy any girl you want a drink");
  } else if (rightAnswersLog.length > 20 && rightAnswersLog.length <= 29) {
    $('#rank').text("You are Strong in the Force");
    $('#message').text("You did really well. You are good at this! But, Master Yoda says 'train more, you must' if you intend to be the master!");
  } else if (rightAnswersLog.length === 30) {
    $('#rank').text("Star Wars GrandMaster");
    $('#message').text("You got every question right! You are the biggest Star Wars nerd there ever was! Now go and get a life you bum!");
  } else {
    alert('error');
  }
}
//variable to hold the return value of the dataSetIteration function
let updatedURL;
////////////////////////////////
//AJAX SETUP AND TRIVIA LINKING
///////////////////////////////
$('.runData').on('click', (event) => {
  updatedURL = dataSetIteration();
  console.log(updatedURL);
  $.ajax({
    url: "https://swapi.co/api/" + updatedURL,
    type: "GET",
  }).then( (data) => {
    // console.log(data);
    const answerArrayEasy = [
      /*Question 1*/["Qui-Gon", "Obi-Wan-Kenobi", /*answer*/data.name, "Vader"],
      /*Question 2*/["Watta", "Luke Skywalker", "Schmi Skywalker", /*answer*/data.name],
      /*Question 3*/[/*answer*/data.name, "Tatooine", "Alderaan", "Coruscant"],
      /*Question 4*/["Obi-Wan Kenobi", /*answer*/data.name, "Qui-Gon", "Anakin Skywalker"],
      /*Question 5*/["Qui-Gon", /*answer*/data.name, "Darth Sidious", "Mace Windu"],
      /*Question 6*/["Kashyyk", "Yavin 4", "Endor", /*answer*/data.name],
      /*Question 7*/["Mace Windu", "Yoda", /*answer*/data.name, "Anakin Skywalker"],
      /*Question 8*/[/*answer*/"Confederacy of Independent Systems", "The Empire", "The New Republic", "The Separatist Regime"],
      /*Question 9*/[/*answer*/data.name, "Neimodian", "Noobian", "Mon Calamari"],
      /*Question 10*/["Six: Red, Green, Purple, Blue,  Yellow, Orange", "Four: 2 Blue, 1 Green, and 1 Yellow", "Four: 1 Blue, 2 Green, 1 Yellow", /*answer*/"Four: 2 Green, 2 Blue"],
      /*Question 11*/["Captain Hull", "Lando Calrissian", /*answer*/data.name, "Han Solo"],
      /*Question 12*/["Owen Lars", "Emperor Palpatine", "Lobot", /*answer*/data.name],
      /*Question 13*/[/*answer*/data.name, "Obi-Wan-Kenobi", "Qui-Gon", "Yoda"],
      /*Question 14*/["Yavin 4", /*answer*/data.name, "Alderaan", "Naboo"],
      /*Question 15*/["The Death Moon", /*answer*/data.name, "The Dark Star", "The Planet Destroyer"],
      /*Question 16*/["Kashyyk", "Yavin 4", "Alderaan", /*answer*/data.name],
      /*Question 17*/["Yavin 4", "Coruscant", /*answer*/data.name, "Naboo"],
      /*Question 18*/[/*answer*/data.name, "The Gungan", "The Neimodians", "The Wampas"],
      /*Question 19*/[/*answer*/data.name, "Ben Lars", "Dax Lars", "Jacob Lars"],
      /*Question 20*/["Darth Vader", "Count Dooku", "Supreme Leader Snokes", /*answer*/data.name],
      /*Question 21*/["Anakin and Padme", "Obi-Wan-Kenobi and Satine Kryze", /*answer*/"Han and Leia", "Hera Syndulla and Kanan Jarrus"],
      /*Question 22*/["Tatooine", "Onderon", "Rishi", /*answer*/data.name],
      /*Question 23*/[/*answer*/data.name, "Finn", "Rey", "Po Dameron"],
      /*Question 24*/["Darth Sidious", /*answer*/"Snoke", "Kylo Ren", "General Hux"],
      /*Question 25*/["Maz Kanata", /*answer*/data.name, "Han Solo", "Admiral Ackbar"],
      /*Question 26*/["Han Solo and Leia's Split", "The loss of his father, Anakin", "To seek out other Jedi", /*answer*/"Kylo's fall to the Dark Side"],
      /*Question 27*/["Anakin Skywalker", "Obi-Wan Kenobi", /*answer*/data.name, "Emperor Palpatine"],
      /*Question 28*/[/*answer*/"Rose Tico", "Luke Skywalker", "Po Dameron", "Leia Skywalker"],
      /*Question 29*/[/*answer*/data.name, "Luke Skywalker", "Rey", "Han Solo"],
      /*Question 30*/["Leuitenant Fazma", "Colonel Dexter", "General Hux", /*answer*/data.name],
    ];
    const answerArrayMedium = [
      /*Question 1*/["Yoda", "Mace Windu", /*answer*/data.name, "Nozferatu"],
      /*Question 2*/["Owen Lars", "Jacob Lars", "Hector Lars", /*answer*/data.name],
      /*Question 3*/[/*answer*/"Darth Tyranus", "Darth Plagius", "Darth Sidious", "Darth Revan"],
      /*Question 4*/["Aurra Sing", /*answer*/"Zam Wesell", "IG-88", "Cad Bane"],
      /*Question 5*/["Watta", /*answer*/data.name, "Zagir", "Peatou"],
      /*Question 6*/["Do Not Know", "I hate Jar Jar", "False", /*answer*/"True"],
      /*Question 7*/["Leia Skywalker", "Luke Skywalker", /*answer*/data.name, "Chewbacca"],
      /*Question 8*/[/*answer*/"66", "56", "6", "96"],
      /*Question 9*/[/*answer*/data.name, "Darth Sidious", "Count Dooku", "Darth Maul"],
      /*Question 10*/["Leia", "Han", "Boba", /*answer*/data.name],
      /*Question 11*/["7", "20", /*answer*/"12", "10"],
      /*Question 12*/["Sand People", "Junk Raiders", "Jawas", /*answer*/"Tusken Raiders"],
      /*Question 13*/[/*answer*/data.name, "Leedo", "Guado", "Jeedo"],
      /*Question 14*/["Aurra Sing & Cad Bane", /*answer*/"IG-88 & Zukuss", "Cradossk & Cato Parsitti", "Embo & Bossk"],
      /*Question 15*/["600,000", /*answer*/"6 million", "6,000", "60 million"],
      /*Question 16*/["Repair Droid", "Utility Droid", "Mechanical Droid", /*answer*/"Astromech Droid"],
      /*Question 17*/["Yarglat Pit", "Rancor Pit", /*answer*/"Sarlacc Pit", "Nexu Pit"],
      /*Question 18*/[/*answer*/"Wampa", "Nexu", "Veractyl", "Bantha"],
      /*Question 19*/[/*answer*/data.name, "Hoth", "Bespin", "Death Star"],
      /*Question 20*/["Fett 1", "Slave 2", "Vengeance 3", /*answer*/"Slave 1"],
      /*Question 21*/["Finn", "Han Solo", /*answer*/"Maz Kanata", "Chewbacca"],
      /*Question 22*/["BB-8 attacks Rey", "Scavengers attack and Finn stopped them", "BB-8 runs away from finn to Rey", /*answer*/"Finn is wearing Po's Jacket"],
      /*Question 23*/[/*answer*/"Rathtars", "Lizaks", "Manaanites", "Kirboars"],
      /*Question 24*/["Po Dameron", /*answer*/data.name, "Rey", "Han Solo"],
      /*Question 25*/["Luke Skywalker", /*answer*/data.name, "Rey", "Kylo Ren"],
      /*Question 26*/["General Hux", "Captain Phasma", "Leia", /*answer*/"Admiral Holdo"],
      /*Question 27*/["Silencer", "TIE Interceptor", /*answer*/"TIE Fighter", "X-Wing"],
      /*Question 28*/[/*answer*/"General Hux", "Admiral Holdo", "Captain Phasma", "Leia Skywalker"],
      /*Question 29*/[/*answer*/"Dreadnaught", "Destroyer", "Cruiser", "Capital Ship"],
      /*Question 30*/["Marge Tico", "Kayla Tico", "Lilly Tico", /*answer*/"Paige Tico"],
    ];
    const answerArrayHard = [
      /*Question 1*/["Mon Motha", "Lux Bonteri", /*answer*/"Valorum", "Mas amedda"],
      /*Question 2*/["Zenga", "Mengi", "Doomba", /*answer*/data.name],
      /*Question 3*/[/*answer*/"20,000", "10,000", "50,000", "8,000"],
      /*Question 4*/["Thorn", /*answer*/"Panaka", "Thire", "Neyo"],
      /*Question 5*/["Ruk Gunray", /*answer*/data.name, "Key Gunray", "Jor Gunray"],
      /*Question 6*/["Java Juice", "Bantha Milk", "Death Sticks", /*answer*/"Jawa Juice"],
      /*Question 7*/["Ralltiir Tiger", "Cathar", /*answer*/"Nexu", "Vorn Tiger"],
      /*Question 8*/[/*answer*/data.name, "Sifo-Dyas", "Kolac Pru", "Lama Su"],
      /*Question 9*/[/*answer*/"Boga", "Tika", "Bentu", "Jenga"],
      /*Question 10*/["Left Leg", "Right Leg", "Left Arm", /*answer*/"Right Arm"],
      /*Question 11*/["Red Four", "Red Five", /*answer*/"Red Two", "Red Three"],
      /*Question 12*/["Bentu", "Rodian", "Ithorian", /*answer*/"Bith"],
      /*Question 13*/[/*answer*/"Krayt Dragon", "Sand Devil", "Womp Rat", "Rancor"],
      /*Question 14*/["All Traversal Terrain Transport", /*answer*/data.name, "Auxiliary Terrain Traversal Transport", "All Terrain Troop Transport"],
      /*Question 15*/["Jidu", /*answer*/data.name, "Greedo", "Simba"],
      /*Question 16*/["Oatiw'ramu", "Nor'pidaq", "Fib'bortoma", /*answer*/data.name],
      /*Question 17*/["Jabba Skotosh Narra", "Jabba Jildosh Whogresk", /*answer*/data.name, "Jabba Brappoosh Broerg"],
      /*Question 18*/[/*answer*/"Jedi Rocks", "Desert Winds", "Gungan March", "Mos Espa"],
      /*Question 19*/[/*answer*/data.name, "Teebo", "Chirpa", "Logray"],
      /*Question 20*/["A-Wing", "C-Wing", "T-Wing", /*answer*/data.name],
      /*Question 21*/["Duke", "Wicket", /*answer*/"Slip", "Chip"],
      /*Question 22*/["Tatooine", "Jakku", "Rishi", /*answer*/"Nantoon"],
      /*Question 23*/[/*answer*/"Lor San Tekka", "Dud Bolt", "Sio Bibble", "Po Dameron"],
      /*Question 24*/["Captain Loatha Sommover", /*answer*/"Captain Canady", "Captain Sweitt Concorkill", "Captain Ello Asty"],
      /*Question 25*/["Stunner", /*answer*/"Silencer", "Interceptor", "Stealther"],
      /*Question 26*/["Dianoga", "Sando", "Pug", /*answer*/"Thala-siren"],
      /*Question 27*/["Don't Jive", "Don't Jinx", /*answer*/"Don't Join", "Don't Jam"],
      /*Question 28*/[/*answer*/"The Praetorian Guards", "The Imperial Guards", "The Supreme Guards", "The Elite Guards"],
      /*Question 29*/[/*answer*/"Lintra", "Tarkin", "Utapaun", "Rose"],
      /*Question 30*/["Almec", "Lux Bonteri", "Tobias Beckett", /*answer*/"Temiri Blagg"],
    ];
    //this function when called will assign the answers to the radio button labels for each question
    const assignAnswers = () => {
      //answer variables for radio buttons
      let $easyAnswerA = answerArrayEasy[answerNumber][0];
      let $easyAnswerB = answerArrayEasy[answerNumber][1];
      let $easyAnswerC = answerArrayEasy[answerNumber][2];
      let $easyAnswerD = answerArrayEasy[answerNumber][3];
      let $mediumAnswerA = answerArrayMedium[answerNumber][0];
      let $mediumAnswerB = answerArrayMedium[answerNumber][1];
      let $mediumAnswerC = answerArrayMedium[answerNumber][2];
      let $mediumAnswerD = answerArrayMedium[answerNumber][3];
      let $hardAnswerA = answerArrayHard[answerNumber][0];
      let $hardAnswerB = answerArrayHard[answerNumber][1];
      let $hardAnswerC = answerArrayHard[answerNumber][2];
      let $hardAnswerD = answerArrayHard[answerNumber][3];
      //variable to hold index of answer arrays
      //variables to hold answers for the radio buttons
      if (answerNumber < answerArrayEasy.length || answerNumber < answerArrayMedium.length || answerNumber < answerArrayHard.length){
        if ($('#easyButton').text() === 'Selected') {
          if (answerNumber === 0) {
            $('#answerText1').text($easyAnswerA);
            $('#answerText2').text($easyAnswerB);
            $('#answerText3').text($easyAnswerC);
            $('#answerText4').text($easyAnswerD);
            // console.log(answerNumber);
          } else if (answerNumber > 0){
            $('#answerText1').text($easyAnswerA);
            $('#answerText2').text($easyAnswerB);
            $('#answerText3').text($easyAnswerC);
            $('#answerText4').text($easyAnswerD);
            // console.log(answerNumber);
          }
        } else if ($('#mediumButton').text() === 'Selected') {
          if (answerNumber === 0) {
            $('#answerText1').text($mediumAnswerA);
            $('#answerText2').text($mediumAnswerB);
            $('#answerText3').text($mediumAnswerC);
            $('#answerText4').text($mediumAnswerD);
          } else if (answerNumber > 0){
            $('#answerText1').text($mediumAnswerA);
            $('#answerText2').text($mediumAnswerB);
            $('#answerText3').text($mediumAnswerC);
            $('#answerText4').text($mediumAnswerD);
          }
        } else if ($('#hardButton').text() === 'Selected') {
          if (answerNumber === 0) {
            $('#answerText1').text($hardAnswerA);
            $('#answerText2').text($hardAnswerB);
            $('#answerText3').text($hardAnswerC);
            $('#answerText4').text($hardAnswerD);
          } else if (answerNumber > 0){
            $('#answerText1').text($hardAnswerA);
            $('#answerText2').text($hardAnswerB);
            $('#answerText3').text($hardAnswerC);
            $('#answerText4').text($hardAnswerD);
          }
        }
      }
      answerNumber++;
    }
    //create the question variable to be displayed to be used different difficulty button listeners
    let $question = $('<div>').appendTo($('.questionDisplay'));
    $question.addClass('questionText').css('color', 'yellow');
    //easy difficulty/////////////////////////////////////////////
    if ($('#easyButton').text() === 'Selected'){
      if (indexNumber >= 0 && indexNumber < questionArrayEasy.length) {
        //assign question 1 of easy array to question.text
        //display first question.
        $question.text(questionArrayEasy[indexNumber]);
        assignAnswers();
        indexNumber++;
        event.preventDefault();
      } else if (indexNumber === questionArrayEasy.length) {
        //call this function when user has answered 30 questions
        gameOver();
      }
    } //medium difficulty////////////////////////////////////////
    else if ($('#mediumButton').text() === 'Selected'){
      if (indexNumber >= 0 && indexNumber < questionArrayMedium.length) {
        //assign question 1 of medium array to question.text
        //display first question.
        $question.text(questionArrayMedium[indexNumber]);
        assignAnswers();
        indexNumber++;
        event.preventDefault();

      } else if (indexNumber === questionArrayMedium.length){
        gameOver();
      }
    } //hard difficulty //////////////////////////////////////////////////////
    else if ($('#hardButton').text() === 'Selected'){
      if (indexNumber >= 0 && indexNumber < questionArrayHard.length) {
        //assign question 1 of hard array to question.text
        //display first question.
        $question.text(questionArrayHard[indexNumber]);
        assignAnswers();
        indexNumber++;
        event.preventDefault();

      } else if (indexNumber === questionArrayHard.length){
        gameOver();
      }
    }
  },
  (error) => {
    console.log(error);
  });
});
//////////////////////////
//EVENT LISTENERS
/////////////////////////
$('#submitAnswer').on('click', answerSubmit);
$('#easyButton').on('click', easyDifficulty);
$('#mediumButton').on('click', mediumDifficulty);
$('#hardButton').on('click', hardDifficulty);
$('.close').on('click', closeModal);
let counterNum = 1;
$('.runData').on('click', () => {
    $('#questionCounter').empty();
    const $count = $('<h3>').text("Question " + counterNum).addClass('counter').appendTo($('#questionCounter'));
    const $total = $('<h3>').text("Total Questions: 30").addClass('counter').appendTo($('#questionCounter'));
    counterNum++;
});
$('#instructions').on('click', openInstructions);
//This event listener and solution found at https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click/18071231
//This will create an event listener that on the click of the playNow Button I created will in the body of the html (Jquery, find me the body of the html) and animate the body of that html through scrolling to a specific position on the page, in this case the triviaArea div container. The slow is how fast the scroll happens.
$("#playNowButton").click(() {
    $('html,body').animate({
        scrollTop: $(".triviaArea").offset().top},
        'slow');
});
//////////////////////////////////////////////////////
//secondary AJAX Setup and random question generator
//this api is from https://opentdb.com/. The api generates a list of questions to use and the associated answers and incorrect answers. For the purpose of this application, I will only use the question and the correct answer.
//////////////////////////////////////////////////////
setInterval(() => {
  $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=11",
    type: "GET",
    random: true
  }).then( (data) => {
    let object = data.results[0].question;
    console.log(object);
    let answer = data.results[0].correct_answer;
    console.log(answer);
    $('#randomQuestion').css('color', 'orange').html(object);
    $('#randomAnswer').css('color', 'yellow').html(answer);
  })
}, 10000);
