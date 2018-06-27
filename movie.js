let xhr = new XMLHttpRequest();
let APIKEY = "35e16679c616a21b9ddebb66272c5902";

function submitMovie() {
    
    let query = document.getElementById("movieForm")["movie"].value;
    xhr.open("GET", "//api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}

function displayText(data) {
    data = JSON.parse(data);
    let name = data.results[0].title;
    document.getElementById("data").innerHTML = name;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayText(this.responseText);
    };
}

console.log(data);
