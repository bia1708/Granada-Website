function myFunction(checked) {
    var elm = document.getElementById('chk');
    if (checked != elm.checked) {
        elm.click();
    }
    var element = document.body;
    element.classList.toggle("dark");
    var sampleElem = document.getElementById("ul");
    if (sampleElem.className === "dropdown-content") {
        sampleElem.className = "darkul";
    } else {
        sampleElem.className = "dropdown-content";
    }

    var sampleElem1 = document.getElementById("drd");
    if (sampleElem1.className === "dropdown") {
        sampleElem1.className = "dropblack";
    } else {
        sampleElem1.className = "dropdown";
    }

    var elementli1 = document.getElementById("li1");
    elementli1.classList.toggle("darkli");

    var elementli2 = document.getElementById("li2");
    elementli2.classList.toggle("darkli");

    var elementli3 = document.getElementById("li3");
    elementli3.classList.toggle("darkli");

    var elementli4 = document.getElementById("li4");
    elementli4.classList.toggle("darkli");

    var elementli5 = document.getElementById("li5");
    elementli5.classList.toggle("darkli");

    var elementli6 = document.getElementById("li6");
    elementli6.classList.toggle("darkli");

    var sampleElem2 = document.getElementById("btn");
    if (sampleElem2.className === "dropbtn") {
        sampleElem2.className = "buttondark";
    } else {
        sampleElem2.className = "dropbtn";
    }

    var element7 = document.getElementById("button");
    element7.classList.toggle("arrowdark");

    if (elm.checked == true) {
        document.getElementById("cover").src = "myself-dark.jpg";
    } else {
        document.getElementById("cover").src = "myself.jpg";
    }

}