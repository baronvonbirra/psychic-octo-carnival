function generateActorOne() {
  var counter = 1;
  var getActorOneCall = {
    "async": true,
    "crossDomain": true,
    "url": getActorURL(),
    "method": "GET",
    "headers": {},
    "data": "{}"
  };

  $.ajax(getActorOneCall)
    .done(function (response) {
      getNameOne = response.name;
      getImageOne = imageURL + response.profile_path;
      getActorIDOne = response.id;
      printActorOneName();
      printActorOneImage();
    })
    .fail(function (err) {
      console.log(err);
      counter++;
      if (counter <= 3) generateActorOne();
    });
}

function generateActorTwo() {
  var counter = 1;
  var getActorTwoCall = {
    "async": true,
    "crossDomain": true,
    "url": getActorURL(),
    "method": "GET",
    "headers": {},
    "data": "{}"
  };

  $.ajax(getActorTwoCall)
    .done(function (response) {
      getNameTwo = response.name;
      getImageTwo = imageURL + response.profile_path;
      getActorIDTwo = response.id;
      printActorTwoName();
      printActorTwoImage();
    })
    .fail(function (err) {
      console.log(err);
      counter++;
      if (counter <= 3) generateActorTwo();
    });
}

function generateFirstActors() {
  generateActorOne();
  generateActorTwo();
}

generateFirstActors();

var imageURL = 'https://image.tmdb.org/t/p/w200';

function getActorURL() {
  number = generateRandomNumber();
  url = generateActorURL(number);

  return url;
};

function generateRandomNumber() {
  var number = Math.random() * (9999);
  number = Math.round(number);
  number = number.toString();

  return number;
}

function generateActorURL(number) {
  var url = "https://api.themoviedb.org/3/person/" + number + "?language=en-US&api_key=44f63178760c028c7269aab4ef019b6f";

  return url;
}

function printActorOneName() {
  document.getElementById("actorOneName").innerHTML = getNameOne;
}

function printActorTwoName() {
  document.getElementById("actorTwoName").innerHTML = getNameTwo;
}

function printActorOneImage() {
  if (getImageOne == 'https://image.tmdb.org/t/p/w200null') {
    img = './images/EjayQ10E.jpg'
  } else {
    img = getImageOne;
  }
  imgSrc = "<img src='" + img + "'>";
  document.getElementById("actorOneImage").innerHTML = imgSrc;
}

function printActorTwoImage() {
  if (getImageTwo == 'https://image.tmdb.org/t/p/w200null') {
    img = './images/EjayQ10E.jpg'
  } else {
    img = getImageTwo;
  }
  imgSrc = "<img src='" + img + "'>";
  document.getElementById("actorTwoImage").innerHTML = imgSrc;
}
