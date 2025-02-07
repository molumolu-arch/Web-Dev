console.log(truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…")
console.log(truncate("Hi everyone!", 20) == "Hi everyone!")


function truncate(string, maxlen) {

    if (string.length > maxlen) {
        console.log(string.slice(0, maxlen-1)+"…")
        return string.slice(0, maxlen-1)+"…"
    }

    return string
}