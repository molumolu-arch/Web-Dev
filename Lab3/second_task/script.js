const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list");

function add() {
    if( inputBox.value === "" ){ 
        
        window.alert("Don't forget to write something!");
    } 
    else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e) {
    if( e.target.tagName === "LI" ) {
        
        e.target.classList.toggle("checked");
        saveData();
    }
    else if ( e.target.tagName === "SPAN" ){

        if(window.confirm()){
            e.target.parentElement.remove();
            saveData();
        }
       
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();