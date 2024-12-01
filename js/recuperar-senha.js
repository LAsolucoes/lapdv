document.getElementById('formularioRecuperandoSenha').addEventListener('submit' , function(verificarEmail){
    verificarEmail.preventDefault()
    let inputEmail = document.getElementById('email')
    let erroEmailInvalido = document.getElementById('erroEmailInvalido')

   if (inputEmail.value === "adm@gmail.com") {
        location.href = "/index.html"
    } else {
        erroEmailInvalido.style.display = "block"
        erroEmailInvalido.querySelector('p').innerHTML = "<strong>E-mail não cadastrado!</strong> <br> Verifique se o e-mail informado está correto, ou se esta atribuido a algum Usuário existente."
        inputEmail.focus()
    }
})