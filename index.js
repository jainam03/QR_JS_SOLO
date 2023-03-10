let qr_code = document.querySelector("#qr-code")
let code_img = document.querySelector('#code-img')
let loader = document.querySelector("#loading")

let clrBtn = document.querySelector('#clr-btn')

qr_code.addEventListener("click", () => {
    loader.style.display = "block"

    code_img.onload = function() {
        loader.style.display = "none"
    }

    let input = document.querySelector('#input').value
    if(!input) {
        alert("Please enter a URL first")
        window.location.reload()
    }

    let api = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`;
    code_img.src = api;
})

clrBtn.addEventListener("click",function() {
    window.location.reload()
})