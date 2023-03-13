
let previousTitle = document.title

window.addEventListener("blur", () => {
    previousTitle = document.title;
    document.title = "Protegemos lo que tanto te costo tener"
})

window.addEventListener('focus', ()=> {
    document.title = previousTitle;
})