function getscore(){
    var showscore=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>"+   showscore+"</h1>";
}