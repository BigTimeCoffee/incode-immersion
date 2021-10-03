window.onload = function () {
    var myFun = document.getElementsByTagName('form')[0]
    myFun.onclick = function () {
        alert("You have submitted the form!");
    };
}
