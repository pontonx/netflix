let filmPopular = document.querySelector(".popular .films");
let filmDrama = document.querySelector(".drama .films");
let filmComedy = document.querySelector(".comedy .films");
let filmHorror = document.querySelector(".horror .films");
let filmAnimated = document.querySelector(".animated .films");

PopularNow();
DramaFilms();
ComedyFilms();
HorrorFilms();
AnimatedFilms();

function PopularNow(){
    
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=3d569174bc2693edc30f38898abab3e4')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        filmPopular.innerHTML = "";

        for (i = 0; i < data.results.length; i++) {
            
            const element = data.results[i];
            
            if(element.poster_path)
            filmPopular.innerHTML += 
            "<div class='film'>" +
            "<img class='filmImage' src='https://www.themoviedb.org/t/p/w1280"+element.backdrop_path+"'</img>" +
            "<div class='info'></div>"+
            "</div>";

        }
    })
}

function DramaFilms() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3d569174bc2693edc30f38898abab3e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=free')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        filmDrama.innerHTML = "";

        for (i = 0; i < data.results.length; i++) {
            
            const element = data.results[i];
            
            if(element.poster_path)
            filmDrama.innerHTML += 
            "<div class='film'>" +
            "<img class='filmImage' src='https://www.themoviedb.org/t/p/w1280"+element.backdrop_path+"'</img>" +
            "<div class='info'></div>"+
            "</div>";

        }
    })
}

function ComedyFilms() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3d569174bc2693edc30f38898abab3e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        filmComedy.innerHTML = "";

        for (i = 0; i < data.results.length; i++) {
            
            const element = data.results[i];
            
            if(element.backdrop_path)
            filmComedy.innerHTML += 
            "<div class='film'>" +
            "<img class='filmImage' src='https://www.themoviedb.org/t/p/w1280"+element.backdrop_path+"'</img>" +
            "<div class='info'></div>"+
            "</div>";

        }
    })
}

function HorrorFilms() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3d569174bc2693edc30f38898abab3e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        filmHorror.innerHTML = "";

        for (i = 0; i < data.results.length; i++) {
            
            const element = data.results[i];
            
            if(element.backdrop_path)
            filmHorror.innerHTML += 
            "<div class='film'>" +
            "<img class='filmImage' src='https://www.themoviedb.org/t/p/w1280"+element.backdrop_path+"'</img>" +
            "<div class='info'></div>"+
            "</div>";

        }
    })
}

function AnimatedFilms() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3d569174bc2693edc30f38898abab3e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        filmAnimated.innerHTML = "";

        for (i = 0; i < data.results.length; i++) {
            
            const element = data.results[i];
            
            if(element.backdrop_path)
            filmAnimated.innerHTML += 
            "<div class='film'>" +
            "<img class='filmImage' src='https://www.themoviedb.org/t/p/w1280"+element.backdrop_path+"'</img>" +
            "<div class='info'></div>"+
            "</div>";

        }
    })
}

