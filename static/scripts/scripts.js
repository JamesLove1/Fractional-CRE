menue_btn = document.getElementById("menue")
list_items = document.getElementsByTagName("nav")[0]

// .style.display = "block"

menue_btn.addEventListener("click", f => {
    if (list_items.style.display === "none") {
        list_items.style.display = "block"
    } else if (list_items.style.display = "block") {
        list_items.style.display = "none"
    }
});

// function menue_main() {
//     let result = None
//     if (list_items.style.display === "none") {
//       result =  list_items.style.display = "block";
//     } else if (list_items.style.display = "block") {
//       result =  list_items.style.display = "none";
//     }
//     return result
// }