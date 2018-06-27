let xhr = new XMLHttpRequest();
let data;
let APIKEY = "35e16679c616a21b9ddebb66272c5902";
let query = "Vertigo";


function submitMovie() {
    
    query = document.getElementById("movieForm")["movie"].value;
    xhr.open("GET", "//api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    };
}

console.log(data);
