function reveal(idname) {
    if (document.getElementById(idname).style.display === "none") {
        document.getElementById(idname).style.display = "flex";
    } else {
        document.getElementById(idname).style.display = "none";

    }
    // document.getElementById(idname).style.display = "flex";
}

function hide(idname) {
    document.getElementById(idname).style.display = "none";

}

function changeBorder(idname) {
    if (document.getElementById(idname).style.borderColor != "#FFC700") {
        document.getElementById(idname).style.borderColor = "#FFC700";
    } else {
        document.getElementById(idname).style.borderColor = "#FFC700"
    }
    // document.getElementById(idname).style.borderImage = "none";

}



function joinButton() {
    alert("Welcome to the Minority Programmers!");

}