$('#maintitle').click(function(){

    var maketitle = document.getElementById('title_coll').value;

    if (maketitle == "") {
        Materialize.toast(`Hey! type something please`, 3000, 'rounded')
    } else {
        Materialize.toast(`${maketitle} added to Collection`, 3000, 'rounded')
    }

    //document.getElementById('colltitle').innerHTML=maketitle;


    var addtoslidenav = `<li><a href="#modal1" class="waves-effect waves-dark  btn modal-trigger btn tooltipped" data-position="bottom" data-delay="50">${maketitle}</a></li>`;

    document.getElementById('slide-out').innerHTML += addtoslidenav;

    //document.getElementById('navbarshowcoll').innerHTML=maketitle;
    /*noob*/
    var make = `<li id="${maketitle}">
            <div class="collapsible-header">
            <i class="material-icons">movie</i>
            ${maketitle}
            </div>
        </li>`;


    document.getElementById('listgg').innerHTML += make;
    var droptitle = `<li><a href="#!" onclick="changedroptitle(this.innerHTML)">${maketitle}</a></li>`;
    document.getElementById('dropdown1').innerHTML += droptitle;

    return maketitle;

})


function changedroptitle(maketitle) {
    document.getElementById('changedroptitle').innerHTML = maketitle;
}window.changedroptitle=changedroptitle;

export{changedroptitle};