
let menu = {
    width: 200,
    heihgt: 300,
    title: "My menu"
};

function multuplyNumberic(obj) {
    for (let key in obj) {
        if ( typeof(obj[key]) == "number" ) {
            obj[key] *= 2;
        }
    }
}