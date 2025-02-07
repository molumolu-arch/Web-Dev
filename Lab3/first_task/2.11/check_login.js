let username = window.prompt("Who's there?");
if(username == "Admin"){
    let password =  window.prompt("Password");
    if (password=="TheMaster"){
        window.alert("Welcome!");
    }else if(password=="Cancel"){
        window.alert("Canceled");
    }else {
        window.alert("Wrong password");
    }
} else if (username == "Cancel") {
    window.alert("Canceled");
}else {
    window.alert("I don't know you");
}
