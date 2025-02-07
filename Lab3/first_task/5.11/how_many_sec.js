function getSecondsToday() {
    let now = new Date();
    console.log(now);
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    console.log(start);
    return Math.round((now-start)/1000);
}

console.log(getSecondsToday());