export function storemovie(title) {
    var maketitle = document.getElementById('title_coll').value;
    var g1 = document.getElementById('changedroptitle').innerHTML;
    var j = 0;
    if (g1 == "Select a Collection") {
        Materialize.toast(`Select a Collection First`, 3000, 'rounded')
    } else {
        Materialize.toast(`${title} added to ${g1}`, 3000, 'rounded')
    }
    var modal = `<div class="collapsible-body"><span>${title}<i class="close material-icons" id="deletebtn">delete_forever</i></span></div>`
    document.getElementById(g1).innerHTML += modal;
    j++;
}
window.storemovie = storemovie;