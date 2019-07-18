///////////////////
//AJAX SETUP
//////////////////
$('#questionButton').on('click', (event) => {
  $.ajax({
    url: 'https://swapi.co/api/films/',
    type: "GET"
  }).then( (data) => {
    console.log("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    films.push(data.results);
    console.log(data.results);
  },
  (error) => {
    console.log(error);
  });
})

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
