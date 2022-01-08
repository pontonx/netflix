let findButton = document.querySelector("#searchbutton");
let film = document.querySelector(".films");
let details = document.querySelector("#details");

findButton.addEventListener("click", SearchMovie);

function SearchMovie() {

    let search = document.querySelector("#search").value;

    fetch('https://api.themoviedb.org/3/search/movie?api_key=3d569174bc2693edc30f38898abab3e4&language=en-US&query='+search+'&page=1&include_adult=false')
    .then(response => response.json())
    .then(data => {
        console.log("MOVIES FOUND: ");
        console.log(data);

        film.innerHTML = "";

        for (i = 0; i < data.results.length; i++) {
            
            const element = data.results[i];
            
            if(element.poster_path)
            film.innerHTML += 
            "<div class='film' onclick='showDetails("+element.id+");'> " +
            "<img class='filmImage' src='https://www.themoviedb.org/t/p/w1280"+element.poster_path+"'</img>" +
            "<h1>"+element.original_title+"</h1>" +
            "<p>&#11088;: " + element.vote_average + "/10</p>" + 
            "</div>";

        }
    });
}

function showDetails(movie) {
    fetch('https://api.themoviedb.org/3/movie/'+movie+'?api_key=3d569174bc2693edc30f38898abab3e4&language=en-US')
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData.title.toString().toUpperCase() +" DETAILS: ");
        console.log(movieData);

        details.innerHTML = 
        "<div class='x'>❌</div>" +
        "<h1>" + movieData.title + "</h1>" +
        "<p>Overview: " + movieData.overview + "</p>" +
        "<p>Release date: " + movieData.release_date + "</p>" +
        "<p>Runtime: " + (parseFloat(movieData.runtime, 2)/60).toFixed(2) + "h</p>";

        let x = document.querySelector(".x");

        x.addEventListener("click", function() {
            details.classList.toggle("hidden");
        });

        details.classList.toggle("hidden");
    })
}