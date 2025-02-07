let user = {
    name: "John",
    years: 30
};

let {name, years, isAdmin = false} = user;
console.log(name, years, isAdmin);
