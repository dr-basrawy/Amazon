
var btn = document.getElementById("allbtn")
var pan = document.getElementById("panel")
var pan75 = document.getElementsByClassName("panalparttow75")[0]

btn.addEventListener("click", function () {
    pan.style.display = 'flex';
    document.getElementsByClassName("big")[0].style.height = '100vh'
    // setTimeout(() => {
    // document.getElementsByClassName("big")[0].style.height = 'auto'
    //     pan.style.display='none';

    // }, 1500);
})

pan75.addEventListener("click", function () {
    document.getElementsByClassName("big")[0].style.height = 'auto'
    pan.style.display = 'none'
})

