let signIn = document.getElementById("signIn");
let signUp = document.getElementById('signUp');
let container = document.getElementById("container");

signUp.addEventListener('click',()=>{
    container.classList.add("right-panel-active");
})

signIn.addEventListener('click',()=>{
    container.classList.remove("right-panel-active");
})

console.log(container)