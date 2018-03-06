import 'jquery';
import { changedroptitle } from './createtitle.js';
import { storemovie, getcardbyid } from './collection.js';
var appstate = {
    movieid: [],
    movietitle: [],
    rating: [],
    releasedate: [],
    posterurl: [],
    overview: []
};


function searchmain() {

    var tag = "";
    let searchInput = document.getElementById("search_movie").value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=2eb076c1d38b60eca3df19a3f408698d&language=en-US&query=${searchInput}&page=1&include_adult=true`)
        .then((res) => {
            res.json().then((data) => {
                console.log(data);
                var j = 0;
                for (let i = 0; i < data.results.length; i++) {
                    appstate.posterurl[i] = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
                    if (data.results[i].poster_path == null) {
                        console.log('this is null');

                        continue;
                    }

                    appstate.movieid[i] = "m" + i;
                    appstate.movietitle[i] = data.results[i].original_title;
                    appstate.rating[i] = data.results[i].vote_average;
                    appstate.releasedate[i] = data.results[i].release_date;
                    appstate.overview[i] = data.results[i].overview;
                    if (j % 3 == 0) {

                        tag += `<div class="row">`

                    }


                    var card = `
    
      <div class="col s12 m4">

    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${appstate.posterurl[i]}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${appstate.movietitle[i]}<i class="material-icons right">more_vert</i></span>
        
      <a class="btn-floating halfway-fab waves-effect waves-dark blue" onclick="storemovie('${appstate.movietitle[i]}')"><i class="material-icons">library_add</i></a>
      <p><a href="#">${appstate.releasedate[i]}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${ appstate.movietitle[i]}<i class="material-icons right">close</i></span>
      <p>${appstate.overview[i]}</p>
    </div>
  </div>
</div>
`;

                    /*onclick="storemovie('${movietitle}','${rating}','${releasedate}','${posterurl}')"*/

                    // console.log(card);
                    tag += card;
                    if (j % 3 == 2) {
                        tag += `</div>`;
                    }




                    document.getElementById("card").innerHTML = tag;
                    /* console.log(document.getElementById(`${appstate.movieid[i]}`));
                     document.getElementById(`${appstate.movieid[i]}`).addEventListener("click", storemovie(appstate.movietitle[i]));*/





                    j++;
                } //end of for loop
            }) //end of 2nd then
        }) //end of 1st then
}
window.searchmain = searchmain;