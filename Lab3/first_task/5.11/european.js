let date = new Date(2025, 2, 7);  // 3 Jan 2012
console.log( getLocalDay(date) ); 

function getLocalDay(date) {
    
    day = date.getDay();

    if (+day==0) {
        return 7;
    }
    else{ 
        return day;
    }
}