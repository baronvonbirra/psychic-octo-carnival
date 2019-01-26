var getActorOneCall = {
  "async": true,
  "crossDomain": true,
  "url": getActorURL(),
  "method": "GET",
  "headers": {},
  "data": "{}"
  };

var getActorOneName = $.ajax(getActorOneCall).done(function (response) {
  getNameOne = response.name
  printActorOneName()
});

var getActorTwoCall = {
  "async": true,
  "crossDomain": true,
  "url": getActorURL(),
  "method": "GET",
  "headers": {},
  "data": "{}"
  };  

var getActorTwoName = $.ajax(getActorTwoCall).done(function (response) {
  getNameTwo = response.name
  printActorTwoName()
});  
  
function printActorOneName() {
  document.getElementById("actorOne").innerHTML = getNameOne;
}

function printActorTwoName() {
  document.getElementById("actorTwo").innerHTML = getNameTwo;
}

function getActorURL() {
  number = generateRandomNumber();
  url = generateURL(number);

  return url;
};

function getActorTwoName() {
  number = generateRandomNumber();
  url = generateURL(number);

  return url;
};

function generateRandomNumber() {
  var number =  Math.random() * (9999);
  number = Math.round(number);
  number = number.toString();
    
  return number;
}

function generateURL(number) {
  var url = "https://api.themoviedb.org/3/person/"+number+"?language=en-US&api_key=44f63178760c028c7269aab4ef019b6f";

  return url;
}