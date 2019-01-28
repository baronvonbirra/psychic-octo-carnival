var getActorOneCall = {
  "async": true,
  "crossDomain": true,
  "url": getActorURL(),
  "method": "GET",
  "headers": {},
  "data": "{}"
  };

var getActorOneName = $.ajax(getActorOneCall).done(function (response) {
  getNameOne = response.name;
  getImageOne = imageURL + response.profile_path;
  printActorOneName();
  printActorOneImage();
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
  getNameTwo = response.name;
  getImageTwo = imageURL + response.profile_path;
  printActorTwoName();
  printActorTwoImage();
});  

var imageURL = 'https://image.tmdb.org/t/p/w200';

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

function printActorOneName() {
  document.getElementById("actorOneName").innerHTML = getNameOne;
}

function printActorTwoName() {
  document.getElementById("actorTwoName").innerHTML = getNameTwo;
}

function printActorOneImage() {
  img = "<img src='"+getImageOne+"'>";
  document.getElementById("actorOneImage").innerHTML = img;
}

function printActorTwoImage() {
  img = "<img src='"+getImageTwo+"'>";
  document.getElementById("actorTwoImage").innerHTML = img;
}
