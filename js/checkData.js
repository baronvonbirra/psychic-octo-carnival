function checkMovieOneActors() {
    actorOneID = getActorIDOne;
    actorTwoID = getActorIDTwo;
    var url = "https://api.themoviedb.org/3/discover/movie?api_key=44f63178760c028c7269aab4ef019b6f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=" + actorOneID + "%2C" + actorTwoID;

    return url;
}

function getMovieOneActorsCall() {
    var getMovieOneActorsCall = {
        "async": true,
        "crossDomain": true,
        "url": checkMovieOneActors(),
        "method": "GET",
        "headers": {},
        "data": "{}"
    };
    return getMovieOneActorsCall;
}

function triggerMovieOneCheck() {
    var getMovieOneActors = $.ajax(getMovieOneActorsCall()).done(function (response) {
        getMovies = response.total_results;
        if (getMovies == 0) {
            $("#actorThreeForm").show();
        } else {

        }
        console.log(getMovies);

    });
}
