function formatDate(date){

    let now = new Date()
    let diff = Math.round((now - date)/1000);

    if ( diff <= 1 ) return "right now";
    if ( diff <= 60) return `${diff} sec. ago`;
    if ( diff <= 3600) return `${Math.round(diff/60)} min. ago`;
    
    return `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()} ${date.getHours()}:${date.getSeconds()}`

}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );