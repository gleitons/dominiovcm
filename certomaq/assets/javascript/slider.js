document.getElementById('vendeSite').innerHTML =  "* ESTE NÃO É O SITE OFICIAL, PARA ACESSAR O OFICIAL, DIGITE O .COM.BR NO FINAL, O ADQUIRA ESTE DOMINIO PARA NÃO TER MAIS ERROS"



const menuA = document.getElementById('logoAlex');

console.log(menuA)
document.getElementById('menuB').innerHTML = `<a href='/' >
<div id='logoAlex'>
    <div class='img'>
        <img src='./assets/img/alex-brasil-brasil.png' alt=''>
        <div>
            <h1>ALEX BRASIL</h1>
            <h2>Gôndolas e equipamentos Comerciais</h2>
        </div>
    </div>

</div>
</a>`;


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