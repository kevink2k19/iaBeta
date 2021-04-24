html2canvas(document.querySelector("#capture")).then(canvas => {
    document.querySelector("#preview").appendChild(canvas)
});
