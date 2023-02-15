export const colorPalette = {
    "Penn red": "92140c",
    "Snow": "fbf5f3",
    "Space cadet": "111d4a",
    "Blue-Black": "070C20"
}
let setBackground = (eID, bg, bool) => {
    if (bool) {
        eID.forEach(element => {
            document.getElementById(element).style.backgroundColor = `#${bg}`
        });
    }else if(!bool){
        document.getElementById(eID).style.backgroundColor = `#${bg}`
    }
}
let setForeground = (eID, color, bool) => {
    if (bool) {
        eID.forEach(element => {
            document.getElementById(element).style.color = `#${color}`
        });
    }else if(!bool){
        document.getElementById(eID).style.color = `#${color}`
    }
}
export { setBackground, setForeground };