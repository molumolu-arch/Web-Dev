function readNumber() {
    let num;

    do {
        num = prompt("Number: ", 0);
    } while ( !isFinite(num) );

    if ( num === null || num === "") return null;

    return +num;
}
alert(`Read: ${readNUmber()}`)