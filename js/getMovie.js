$('.movieOneForm').on('submit', function () {
    $("#movieOneContainer").show();
    window.name = setMovieOneURL();
    triggerMovieOne();
    $('#movieOneInput').prop('disabled', true);
   
    return false;
});

function setMovieOneURL() {
    var search = getMovieOne();
    var url = "https://api.themoviedb.org/3/search/movie?api_key=44f63178760c028c7269aab4ef019b6f&language=en-US&query=" + search + "&page=1";
    
    return url;
}

var getMovieOneCall = {
    "async": true,
    "crossDomain": true,
    "url": window.name,
    "method": "GET",
    "headers": {},
    "data": "{}"
};

function triggerMovieOne() {
    $.ajax(getMovieOneCall).done(function (response) {
        getMovieOne = response.results[0].title;
        getMovieImageOne = imageURL + response.results[0].poster_path;
        printMovieOneName();
        printMovieOneImage();
    });
}

var imageURL = 'https://image.tmdb.org/t/p/w200';

function getMovieOne() {
    var movie = document.getElementById('movieOneInput').value;
    var movieEncode = encodeURI(movie);

    return movieEncode;
}

function printMovieOneName() {
    document.getElementById("movieOneName").innerHTML = getMovieOne;
}

function printMovieOneImage() {
    img = "<img src='" + getMovieImageOne + "'>";
    document.getElementById("movieOneImage").innerHTML = img;
}
