function storemovie(title, rating, releasedate, posterurl) {
	var maketitle=document.getElementById('title_coll').value;
	var g1=document.getElementById('changedroptitle').innerHTML;

	Materialize.toast(`${title} added to ${g1}`, 3000, 'rounded')
    var spanno = parseInt(document.getElementById("spannew").innerHTML);
    spanno += 1;
    document.getElementById("spannew").innerHTML = spanno;
    /*console.log(spanno);*/
    var j = 0;
    
    var collect = "";
   /* var modal = `
      <li class="collection-item"><div><i class="material-icons">movie</i>${title}<a href="#!" class="secondary-content" onclick="delete1()"><i class="material-icons">delete</i></a></div></li>`;
    collect += modal;
    document.getElementById("modalgg").innerHTML += collect;*/
    

    var modal=`<div class="collapsible-body"><span>${title}<i class="close material-icons">delete_forever</i></span></div>`


    
document.getElementById(g1).innerHTML += modal;



    j++;
};

