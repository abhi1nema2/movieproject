


function getsearch() {

	var tag="";
    let searchInput = document.getElementById("search_movie").value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=2eb076c1d38b60eca3df19a3f408698d&language=en-US&query=${searchInput}&page=1&include_adult=true`)
        .then((res) => {
            res.json().then((data) => {
                console.log(data);
                var j=0;
                for (let i = 0; i < data.results.length; i++) {
                    var posterurl = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
                    if(data.results[i].poster_path==null)
                    {
                    	console.log('this is null');
                    	
                   	continue;
                    }


                    var movietitle = data.results[i].original_title;
                    var rating = data.results[i].vote_average;
                    var releasedate = data.results[i].release_date;
                    var overview=data.results[i].overview;
                    var store=[movietitle,posterurl,overview,releasedate];
                 /*   console.log(store[0]);*/
                    //creating  a material card 
                    if(j%3==0){
                    	
                    tag +=`<div class="row">`

               }
                

                        var card = `
    
      <div class="col s12 m4">

    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${posterurl}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${movietitle}<i class="material-icons right">more_vert</i></span>
        
      <a class="btn-floating halfway-fab waves-effect waves-dark blue" onclick="storemovie('${movietitle}','${rating}','${releasedate}','${posterurl}')"><i class="material-icons">library_add</i></a>
      <p><a href="#">${releasedate}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${movietitle}<i class="material-icons right">close</i></span>
      <p>${overview}</p>
    </div>
  </div>
</div>
`;


 // console.log(card);
tag+=card;
  if(j%3==2){
  	tag+=`</div>`;
  }



     
document.getElementById("card").innerHTML = tag;
             


j++;
                } //end of for loop
            }); //end of 2nd then
        }); //end of 1st then



} //end of getsearch

