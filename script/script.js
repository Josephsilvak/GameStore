let nome = document.getElementById('nome')
let nomeLabel = document.getElementById('nomeLabel')
let validNome = false

let email = document.getElementById('email')
let emailLabel = document.getElementById('emailLabel')
let validEmail = false

let senha = document.getElementById('senha')
let senhaLabel = document.getElementById('senhaLabel')
let validSenha = false

let senhaNv = document.getElementById('senhaNv')
let senhaNvLabel = document.getElementById('senhaNvLabel')
let validSenhaNv = false

let userLog = document.getElementById('userLog')
let userLogLabel = document.getElementById('userLogLabel')

let senhaLog = document.getElementById('senhaLog')
let senhaLogLabel = document.getElementById('senhaLogLabel')


//Sair da Conta
sairConta = () => {
    localStorage.removeItem('conta')
    window.location.href = 'login.html'
}

//sistema de conta
let contaPage = document.getElementById('contaPage')
let contaAtiva
//faz com que a seção da conta expire após 10 minutos offline
setTimeout(() => {
    localStorage.removeItem('conta')
},600000)

//Muda o nome do botão(navbar) pra "Conta", se logado. Se não, muda pra "Entrar"
if(JSON.parse(localStorage.getItem('conta')) == true){
    contaPage.innerHTML = 'Conta'
} else {
    contaPage.innerHTML = 'Entrar'
}

//Ao Clicar, redireciona pra página conta caso esteja logado, caso não, volta pro login
function verificaLogin() {
    if(contaPage.innerHTML === 'Conta'){
        window.location.href = 'conta.html'
    } else (
        window.location.href = 'login.html'
    )
}


//box de alerta do cadastro
let alertBoxCad = document.querySelector('.alertBoxCad')
let alertBoxLog = document.querySelector('.alertBoxLog')


//faz o cadastra da conta
function cadastrar() {
    // cria array em localStorage se não for encontrado o item listaUser
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    // verifica se *senha e *senhaNovamente são iguais
    let validaSenha = (senha.value === senhaNv.value) ? true : false

    // verifica se ta tudo certo pra proceguir com o cadastro
    if( validNome === true && validEmail === true && validSenha === true && validSenhaNv === true && validaSenha === true ){

        contaAtiva = true
        localStorage.setItem('conta', JSON.stringify(contaAtiva))


        listaUser.push({
            nome: nome.value,
            email: email.value,
            senha: senha.value,
            senhaNv: senhaNv.value
        })


        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000)

        alertBoxCad.innerHTML = 'Cadastrando usuário...'
        alertBoxCad.style.color = 'greenyellow'
        alertBoxCad.style.backgroundColor = 'rgb(93 139 23 / 52%)'
        alertBoxCad.style.display = 'block'
    } else {
        //mensagem de erro
        alertBoxCad.innerHTML = 'Preencha os campos corretamente!'
        alertBoxCad.style.color = 'red'
        alertBoxCad.style.backgroundColor = 'rgb(140 10 10 / 55%)'
        alertBoxCad.style.display = 'block'
        setTimeout(() => {
            alertBoxCad.style.display = 'none'
        }, 2000)
    }
}


//faz o login na conta
function entrar() {

    let UserNickName
    
    let listaUser = []

    let validaUser = {
        nome: '',
        email: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

        
        if(JSON.parse(localStorage.getItem('listaUser'))) {

            listaUser.forEach((item) => {
                if(userLog.value == item.nome && senhaLog.value == item.senha){
                    validaUser = {
                        nome: item.nome,
                        email: item.email,
                        senha: item.senha
                    }
                }
            })
        } else {
            JSON.parse(localStorage.getItem('listaUser'))
        }

    if(userLog.value == validaUser.nome && senhaLog.value == validaUser.senha && senhaLog.value != '' && userLog.value != ''){

        contaAtiva = true
        localStorage.setItem('conta', JSON.stringify(contaAtiva))

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000)

        alertBoxLog.innerHTML = 'Fazendo Log-in...'
        alertBoxLog.style.color = 'greenyellow'
        alertBoxLog.style.backgroundColor = 'rgb(93 139 23 / 52%)'
        alertBoxLog.style.display = 'block'
    } else {

        alertBoxLog.innerHTML = 'Usuário ou Senha estão incorretos'
        alertBoxLog.style.color = 'red'
        alertBoxLog.style.backgroundColor = 'rgb(140 10 10 / 55%)'
        alertBoxLog.style.display = 'block'
        
        setTimeout(() => {
            alertBoxLog.style.display = 'none'
        }, 2000)
    }
}



function redirecionaCard() {
    document.location.href = 'cardSection.html'
}



// botão de visualizar senha do login e cadastro
    let verSenha = document.querySelector('#verSenha')
verSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    

    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

    let verSenhaNv = document.querySelector('#verSenhaNv')
verSenhaNv.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaNv')
    

    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

    let verSenhaLog = document.querySelector('#verSenhaLog')
verSenhaLog.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaLog')
    

    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


//faz a verificação de caracters Cadastro e Login
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        nomeLabel.style.color = 'rgb(255 46 0)'
        if(nome.value != ''){
            nomeLabel.innerHTML = 'Nome: *insira no mínimo 3 caracters'
        } else {
            nomeLabel.innerHTML = 'Nome:'
        }
        nome.style.borderBottom = '2px dashed rgb(255 46 0)'
        validNome = false
    } else {
        nomeLabel.style.color = 'rgb(0 255 0 / 60%)'
        nomeLabel.innerHTML = 'Nome:'
        nome.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 12){

        emailLabel.style.color = 'rgb(255 46 0)'
        if(email.value != ''){
            emailLabel.innerHTML = 'E-mail: *insira um email válido!'
        } else {
            emailLabel.innerHTML = 'E-mail:'
        }
        email.style.borderBottom = '2px dashed rgb(255 46 0)'
        validEmail = false
    } else {
        emailLabel.style.color = 'rgb(0 255 0 / 60%)'
        emailLabel.innerHTML = 'E-mail:'
        email.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        senhaLabel.style.color = 'rgb(255 46 0)'
        if(senha.value != ''){
            senhaLabel.innerHTML = 'Senha: *insira no mínimo 8 caracters'
        } else {
            senhaLabel.innerHTML = 'Senha:'
        }
        senha.style.borderBottom = '2px dashed rgb(255 46 0)'
        validSenha = false
    } else {
        senhaLabel.style.color = 'rgb(0 255 0 / 60%)'
        senhaLabel.innerHTML = 'Senha:'
        senha.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validSenha = true
    }
})

senhaNv.addEventListener('keyup', () => {

    if(senhaNv.value != senha.value || senhaNv.value == '' || senhaNv.value.length < 8 ){
        senhaNvLabel.style.color = 'rgb(255 46 0)'
        if(senhaNv.value != ''){
            senhaNvLabel.innerHTML = 'Senha novamente: *As senhas não conferem'
        } else {
            senhaNvLabel.innerHTML = 'Senha novamente:'
        }
        senhaNv.style.borderBottom = '2px dashed rgb(255 46 0)'
        validSenhaNv = false
    } else {
        senhaNvLabel.style.color = 'rgb(0 255 0 / 60%)'
        senhaNvLabel.innerHTML = 'Senha novamente:'
        senhaNv.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validSenhaNv = true
    }
})

userLog.addEventListener('keyup', () => {
    if(userLog.value.length <= 2){
        userLogLabel.style.color = 'rgb(255 46 0)'
        userLog.style.borderBottom = '2px dashed rgb(255 46 0)'
    } else {
        userLogLabel.style.color = 'rgb(0 255 0 / 60%)'
        userLog.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
    }
})

senhaLog.addEventListener('keyup', () => {
    if(senhaLog.value.length <= 7){
        senhaLogLabel.style.color = 'rgb(255 46 0)'
        senhaLog.style.borderBottom = '2px dashed rgb(255 46 0)'
    } else {
        senhaLogLabel.style.color = 'rgb(0 255 0 / 60%)'
        senhaLog.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
    }
})