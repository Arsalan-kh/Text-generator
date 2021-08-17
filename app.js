//Select black-bg div//
const demo = document.querySelector("#Change-font");

//using 'for of' loop select the fonts and then display on black-bg div//
for (const a of document.querySelectorAll(".select-font"))
    a.onclick = () => {
        demo.style.fontFamily = a.style.fontFamily;

    }

//making a function that grab a text from text area and then show in black-bg div//
function getText() {
    var getText = document.getElementById("Mytext").value;
    document.getElementById("Change-font").innerHTML = getText;
}


//Making 'for of loop' that loop through each buttons and then color it//
for (const selectedColor of changeColor = document.querySelectorAll("button"))
    selectedColor.onclick = () => {
        demo.style.color = selectedColor.style.color;

    }