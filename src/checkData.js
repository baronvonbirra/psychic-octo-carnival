function triggerMovieOneCheck() {
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

    var page = 1;

    function getActorOneMovieOne() {
        function getMovieOneActorOneURL() {
            actorOneID = getActorIDOne;
            var url = "https://api.themoviedb.org/3/discover/movie?api_key=44f63178760c028c7269aab4ef019b6f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page + "&with_cast=" + actorOneID;

            return url;
        }

        var getMovieOneActorOneCall = {
            "async": true,
            "crossDomain": true,
            "url": getMovieOneActorOneURL(page),
            "method": "GET",
            "headers": {},
            "data": "{}"
        };
        $.ajax(getMovieOneActorOneCall).done(function (response) {
            getPages = response.total_pages;
            currentPage = response.page;
            getTotal = response.total_results;

            var perPage = (response.results).length;
            for (var o = 0; o < perPage; o++) {
                movie = response.results[o].title;
                console.log(movie);
                if (movie === getMovieOne) {
                    return true;
                }
            }
        });
    }

    $.ajax(getMovieOneActorsCall()).done(function (response) {
        getMovies = response.total_results;
        if (getMovies == 0) {
            getActorOneMovieOne();
            $("#actorThreeForm").show();
        } else {

        }
        console.log(getMovies);
    });
}
