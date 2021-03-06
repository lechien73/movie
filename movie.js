let xhr = new XMLHttpRequest();
let APIKEY = "35e16679c616a21b9ddebb66272c5902";

function submitMovie() {
    
    let query = document.getElementById("movieForm")["movie"].value;
    xhr.open("GET", "//api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}

function displayText(data) {
    data = JSON.parse(data);
    let name = "<div><h2>" + data.results[0].title + "</h2></div>";
    let overview = "<div><p>" + data.results[0].overview + "</p></div>";
    let poster = "<img src='https://image.tmdb.org/t/p/w500" + data.results[0].poster_path + "' />";
    document.getElementById("data").innerHTML = name + overview + poster;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayText(this.responseText);
    };
}

