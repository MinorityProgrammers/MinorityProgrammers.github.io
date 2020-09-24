function reveal(idname, hide) {
    if (!hide) {
        if (document.getElementById(idname).style.display === "none") {
            document.getElementById(idname).style.display = "flex";
        } else {
            document.getElementById(idname).style.display = "none";

        }
    } else {

        document.getElementById(idname).style.display = "flex";
        // document.getElementById(idname).style.cursor = "default";

    }
}

function cursorDefault(idname) {
    document.getElementById(idname).style.cursor = "default";

}

function changeBorder(idname, hide) {
    // if (!hide) {
    if (document.getElementById(idname).style.borderColor != "#FFC700") {
        document.getElementById(idname).style.borderColor = "#FFC700";
    } else {
        document.getElementById(idname).style.borderColor = "#151371"

    }
    // } 
    // else {
    //     document.getElementById(idname).style.borderColor = "#FFC700";
    // }
}




function joinButton() {
    alert("Welcome to the Minority Programmers!");

}