export const colorPalette = {
    "Penn red": "92140c",
    "Snow": "fbf5f3",
    "Space cadet": "111d4a",
    "Blue-Black": "070C20"
}
let setBackground = (eID, bg, bool) => {
    console.log()
    console.log(bg, typeof bg)
    if (bool) {
        eID.forEach(element => {
            document.getElementById(element).setAttribute('style', `backgroundColor: #${bg}`)
        });
    }
}
let setForeground = (eID, color, bool) => {
    if (bool) {
        for (let index = 0; index < eID.length; index++) {
            document.getElementById(eID).style.color(`#${color}`)
        }
    }
}
export { setBackground, setForeground };