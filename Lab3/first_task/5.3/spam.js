checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(string) {
    
    return string.toLowerCase().includes("viagra") || string.toLowerCase().includes("xxx")
}