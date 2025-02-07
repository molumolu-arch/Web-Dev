let date = new Date(2014, 0, 3);

function getWeekDay(date) {
    
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thrusday", "Friday", "Saturday"];
    return weekDays[date.getDay()];

}

console.log(getWeekDay(date));