document.getElementById('formularioLogin').addEventListener('submit' , function(verificarLogin){
    verificarLogin.preventDefault()
    let inputLogin = document.getElementById('login')
    let inputSenha = document.getElementById('senha') 
    let erroCredenciais = document.getElementById('erroCredenciais')

    if ((inputLogin.value == "adm" || inputLogin.value == "adm@gmail.com") && inputSenha.value == "123") {
        location.href = "/pages/dashboard.html"
        
    } else {
        erroCredenciais.style.display = 'block'
        erroCredenciais.querySelector('p').innerText = "Usuário ou Senha Inválido"
        inputLogin.value = ""
        inputSenha.value = ""
        inputLogin.focus()
        
    }

})