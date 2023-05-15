
let Carasole =  placeholder(
    document.getElementById("carasole_left"),
    document.getElementById("carasole_right"),
    document.getElementsByClassName("items")
);

let Carasole_1 = placeholder(
    document.getElementById("carasole_left_1"),
    document.getElementById("carasole_right_1"), 
    document.getElementsByClassName("items1")
);

let Carasole_2 = placeholder(
    document.getElementById("carasole_left_2"),
    document.getElementById("carasole_right_2"),
    document.getElementsByClassName("items2")
);

let Carasole_3 = placeholder(
    document.getElementById("carasole_left_3"),
    document.getElementById("carasole_right_3"),
    document.getElementsByClassName("items3")
);

let Carasole_4 = placeholder(
    document.getElementById("carasole_left_4"),
    document.getElementById("carasole_right_4"),
    document.getElementsByClassName("items4")
);

let Carasole_5 = placeholder(
    document.getElementById("carasole_left_5"),
    document.getElementById("carasole_right_5"),
    document.getElementsByClassName("items5")
);

let Carasole_6 = placeholder(
    document.getElementById("carasole_left_6"),
    document.getElementById("carasole_right_6"),
    document.getElementsByClassName("items6")
);

let Carasole_7 = placeholder(
    document.getElementById("carasole_left_7"),
    document.getElementById("carasole_right_7"),
    document.getElementsByClassName("items7")
);

let Carasole_8 = placeholder(
    document.getElementById("carasole_left_8"),
    document.getElementById("carasole_right_8"),
    document.getElementsByClassName("items8")
);

let Carasole_9 = placeholder(
    document.getElementById("carasole_left_9"),
    document.getElementById("carasole_right_9"),
    document.getElementsByClassName("items9")
);


function placeholder(arrow_left, arrow_right,items){
    //Function and accompanying logic
    let index = Number(0);
    let num_items = Number();

    for (let i = 0; i < items.length; i++) {
        // console.log(i)
        num_items = i
    }

    function arrow_right_logic() {
        //arrow_right.style.color = "red";
        if (index <= num_items) {
            // console.log("index: ", index);
            // console.log("item: ", items[index])
            items[index].style.cssText = "z-index: 1;"
            if (index > 0) {
                items[index - 1].style.cssText = "z-index: 0;"
                // console.log("prior item: ", items[index - 1])
            }
            index++;
        }
    }

    function arrow_left_logic() {
        //arrow_left.style.color = "green";
        if (index > 0) {
            // console.log("index: ", index);
            index--;
            // console.log("index: ", index);
            items[index].style.cssText = "z-index: 1;"
            // console.log("item: ", items[index])
            if (index < num_items) {
                items[index + 1].style.cssText = "z-index: 0;"
                // console.log("prior item: ", items[index + 1])
            }
        }
    }

    //Event listner
    arrow_right.addEventListener("click", arrow_right_logic)

    arrow_left.addEventListener("click", arrow_left_logic)
}


//NOTES
/*
//CARASOLE NOTES
//Carasole 0 
let arrow_left = document.getElementById("arrow_left"); //.style.color ="green";
let arrow_right = document.getElementById("arrow_right"); //.style.color ="red";
let items = document.getElementsByClassName("items");

//Function and accompanying logic
let index = Number(0);
let num_items = Number();

for (let i = 0; i < items.length; i++) {
    // console.log(i)
    num_items = i
}

function arrow_right_logic(){
    //arrow_right.style.color = "red";
    if (index <= num_items) {
        // console.log("index: ", index);
        // console.log("item: ", items[index])
        items[index].style.cssText = "z-index: 1;"
        if (index > 0) {
            items[index - 1].style.cssText = "z-index: 0;"
            // console.log("prior item: ", items[index - 1])
        }
        index++;
    }
}

function arrow_left_logic(){
    //arrow_left.style.color = "green";
    if (index > 0) {
        // console.log("index: ", index);
        index--;
        // console.log("index: ", index);
        items[index].style.cssText = "z-index: 1;"
        // console.log("item: ", items[index])
        if (index < num_items) {
            items[index + 1].style.cssText = "z-index: 0;"
            // console.log("prior item: ", items[index + 1])
        }
    }
}

//Event listner
arrow_right.addEventListener("click", arrow_right_logic)

arrow_left.addEventListener("click", arrow_left_logic)





*/


