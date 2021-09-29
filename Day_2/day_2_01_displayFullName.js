/*fullName = ["James", "Bond"];
console.log(fullName[0]);*/
function displayFullName(fullname) {
    lastname = fullname.split(" ").slice(-1).join(" ");

    console.log("My name is, " + lastname + ", " + fullname);
}


displayFullName("James Bond");