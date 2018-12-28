var getActorCall = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/find/nm0000409?external_source=imdb_id&language=en-US&api_key=44f63178760c028c7269aab4ef019b6f",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
var getActorName = $.ajax(getActorCall).done(function (response) {
    getName = response.person_results[0].name

    document.getElementById("actorOne").innerHTML = getName;
});

function generateRandomNumber() {
    var number =  Math.random() * (9999999);
    number = Math.round(number);
    console.log(number);
    
    return number;
}
