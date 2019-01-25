var getActorCall = {
  "async": true,
  "crossDomain": true,
  "url": generateURL(),
  "method": "GET",
  "headers": {},
  "data": "{}"
  }
  
var getActor1Name = $.ajax(getActorCall).done(function (response) {
  getName = response.name

  getActorOneName();
});

var getActo2rName = $.ajax(getActorCall).done(function (response) {
  getName = response.name

  getActorTwoName();
});

function getActorOneName() {
  document.getElementById("actorOne").innerHTML = getName;
}

function getActorTwoName() {
  document.getElementById("actorTwo").innerHTML = getName;
}

function generateRandomNumber() {
  var number =  Math.random() * (9999);
  number = Math.round(number);
  number = number.toString();
  console.log(number);
    
  return number;
}

function generateURL() {
  var number = generateRandomNumber();
  var url = "https://api.themoviedb.org/3/person/"+number+"?language=en-US&api_key=44f63178760c028c7269aab4ef019b6f";

  return url;
}