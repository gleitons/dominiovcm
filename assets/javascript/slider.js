function mechame() {
    alert("PROCURE POR ALEX BRASIL");
    location.href = "https://goo.gl/maps/n5TCHiNU2Hb5weK86";
}

function formEnv() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('tel').value;
    const email = document.getElementById('email').value;

    const infoW = `Olá Alex Brasil, meu nome é ${nome} meu telefone é ${telefone} e meu e-mail é ${email}, gostaria de mais informações do projeto que eu tenho`

    const nomeS = JSON.stringify(infoW);
    console.log(nomeS)

    const dados = localStorage.setItem('whats',`${nomeS}`);
    href = ""
}