let d = new Date(2015, 0, 2);

console.log( getDateAgo(d, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(d, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(d, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, delta) {

    let dateCopy = new Date(date);
    
    dateCopy.setDate(dateCopy.getDate()-delta);
    return dateCopy.getDate();

}