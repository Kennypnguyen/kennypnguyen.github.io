
/*
Function to make text bigger
*/
function bigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

/*
Function to make text fancy
*/
function fancy() {
    let words = document.getElementById("text");
    if(document.getElementById("fancy").checked) {
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline";
        words.style.fontSize = "10pt";
        document.getElementById("boring").checked = false;
    }
}

/*
Function to make text boring
*/
function boring() {
    let words = document.getElementById("text");
    if(document.getElementById("boring").checked) {
        words.style.fontweight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
        words.style.fontSize = "10pt";
        document.getElementById("fancy").checked = false;
    }
}
/*
Function that makes all letters in text uppercase and adds a suffix "-Moo" to the last 
word of each sentence
*/
function moo() {
    let words = document.getElementById("text");
    words.style.textTransform = "uppercase";
    let parts = words.value.split(".");
    words.value = parts.join("-Moo.");
}