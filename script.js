// let signIn = document.getElementById("signIn");
// let signUp = document.getElementById('signUp');
let container = document.getElementById("container");

// signUp.addEventListener('click',()=>{
//     container.classList.add("right-panel-active");
// })

// signIn.addEventListener('click',()=>{
//     container.classList.remove("right-panel-active");
// })

// console.log(container)
function signIn() {
    container.classList.remove("rigth-panel-active");
}

function signUp(){
    container.classList.add("rigth-panel-active");
}