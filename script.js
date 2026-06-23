

const formLogin = document.getElementById("formLogin");


formLogin.addEventListener("submit", function (evento) {

    evento.preventDefault();


    const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erro = document.getElementById("mensagemErro");

    const emailvalido = email.value.includes('@') && email.value.includes('.')
    const senhavalido = senha.value.length >= 6;


    
    console.log("chegou3333")

    if (emailvalido == true && senhavalido == true) {
        mensagemErro.classList.add('d-none');
        window.location.href = 'curso.html';
    } else {
        mensagemErro.classList.remove('d-none');
    }

});
