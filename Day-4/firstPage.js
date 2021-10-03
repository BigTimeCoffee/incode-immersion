window.onload = function() {
  document.getElementsByTagName("title")[0].innerHTML = "My first (dynamic) webpage"


    var elThen = document.getElementsByTagName("h2")[0]
    var elNow = document.getElementsByTagName("h2")[1]

    elThen.onclick = function() {
        alert("The Beatles (January 13, 1969)");
    }
    elNow.onclick = function() {
        alert("Carly Rae Jepsen (March 1, 2012)");
    }
}
