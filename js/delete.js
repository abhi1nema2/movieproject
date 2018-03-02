function delete1(){
var closebtns = document.getElementsByClassName("collapsible-body");
var i;
  var spanno = parseInt(document.getElementById("spannew").innerHTML);
    spanno -= 1;
    document.getElementById("spannew").innerHTML = spanno;
/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  closebtns.style.display = 'none';
});
}

}
