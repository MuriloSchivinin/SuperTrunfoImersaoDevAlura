var cartas = [
    {
        name: 'MURILO',
        atributos: {
            velocidade: 85,
            habilidade: 70,
            marcação: 80,
            força: 80
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.6435-9/50458306_2057948490987227_2130467683357949952_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHzzY93-S6x-SeWaMfuaQqONrYDt1Q3IW02tgO3VDchbVRXAFSXpXJ0OKBg8qkm271d0zGG8-AJ87gZ0SgM1Rhb&_nc_ohc=6rrP-TCzkVcAX_ZMgdw&_nc_ht=scontent.fbat1-1.fna&oh=2b111aa269f8958f5f90ac0ae6fd0470&oe=608C478A'
    },
    {
        name: 'FERNANDO',
        atributos: {
            velocidade: 45,
            habilidade: 69,
            marcação: 90,
            força: 80
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.18169-9/12509678_944689042283303_519082974006682455_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHZI6H3z_1T6WcRwBJ6pf16i1Kp-dL0-M-LUqn50vT4z-SeAX8LgIuGvvR4_BtwN8MALeFigKcOUwz1XMkEX0sL&_nc_ohc=l1MgfBdipY0AX95mMk2&_nc_ht=scontent.fbat1-1.fna&oh=eadab73508efd2a0dd03805ff3b63d2a&oe=6089564E'
    },
    {
        name: 'LEONARDO',
        atributos: {
            velocidade: 80,
            habilidade: 80,
            marcação: 60,
            força: 90
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.6435-9/75233933_1770005133131566_9112463341183303680_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHLZdO7g2uxg0jZ2iDtFcgng_H6nJQ53VqD8fqclDndWs4I70VXW3QetoyWE3x00yUgQN4LDnv9k552UZo8It05&_nc_ohc=utiVNBHrrrIAX8fecwg&_nc_ht=scontent.fbat1-1.fna&oh=b48db7e2e494f9d56e57c7f544b9c481&oe=608BE610'
    },
    {
        name: 'FÁBIO',
        atributos: {
            velocidade: 20,
            habilidade: 70,
            marcação: 60,
            força: 95
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.6435-9/52901586_1209785045857685_7148123382221897728_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=84a396&_nc_eui2=AeEvH3io0qX-CEAjo7ZbIfbmV5mT3nkoiRlXmZPeeSiJGXhW3tx2kjPN9sju7MYlkl73BxDVtN2EbkMAncjxySVD&_nc_ohc=q38S9FCD8UQAX-0mMDB&_nc_oc=AQkMh01r7e_WDU9O23cjIm2NukRhEpTT9fUR0Gc_1BGRZSnlvrocebOrqSXI1Zd_to8&_nc_ht=scontent.fbat1-1.fna&oh=c94f419f79a5f89a7fef2bb1fafad60e&oe=608A78CB'
    },
    {
        name: 'ISIDORO',
        atributos: {
            velocidade: 90,
            habilidade: 80,
            marcação: 60,
            força: 60
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.6435-9/51960855_10157076550393139_6492283864692555776_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHUKdc7xDCJ98o06H8fM_wCA2_9tlDlcjEDb_22UOVyMcBH9T_Wto21Qvd3sPPXVgNRx12FFIGZrI0t0mTCjaEs&_nc_ohc=CoYky1vnMQkAX8nBq6D&_nc_ht=scontent.fbat1-1.fna&oh=dcf9ff337b7f1d928c22a57257b6e143&oe=608A40C7'
    },
    {
        name: 'MIKELSON',
        atributos: {
            velocidade: 60,
            habilidade: 10,
            marcação: 95,
            força: 100
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.6435-9/81320944_1255318451320523_4243026263624646656_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGB5zUdLaMcOPdkhJcBn_lxOTsSk_1A1BE5OxKT_UDUEVQZ1g7KNQhh369cMSr16cf4kHBHziZUAogwBL10chvP&_nc_ohc=MEl3pi44SRIAX8bHs0R&_nc_ht=scontent.fbat1-1.fna&oh=07d4a24d3a33d8bad7a12cb5f1e473a9&oe=608A9CA8'
    },
    {
        name: 'LUCAS',
        atributos: {
            velocidade: 85,
            habilidade: 60,
            marcação: 70,
            força: 65
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t1.18169-9/10635998_520504124751863_5154371738919273811_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=_LUpGdMLZtoAX9PLKvH&_nc_ht=scontent.fbat1-1.fna&oh=7df608ba5d0eacdf2abe236a50fd3178&oe=608CE4DF'
    },
    {
        name: 'ERNESTO',
        atributos: {
            velocidade: 85,
            habilidade: 80,
            marcação: 90,
            força: 85
        },
        url: 'https://scontent.fbat1-1.fna.fbcdn.net/v/t31.18172-8/339472_101570163286797_66783635_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=de6eea&_nc_ohc=2WCCg2uS36kAX8WrCaa&_nc_ht=scontent.fbat1-1.fna&oh=cc5b5801b3c0a966470cda03e33dfbba&oe=608F2AC1'
    }
]

var cartaJogador
var cartaMaquina

var pontosJogador = 0
var pontosMaquina = 0


function atualizaPontos() {
    var divPlacar = document.getElementById('placar')
    var html = `<h3>Jogador - ${pontosJogador} / ${pontosMaquina} - Maquina</h3>`
    html += `<p>Total de cartas no jogo: ${cartas.length}</p>`

    divPlacar.innerHTML = html
}
atualizaPontos()

function drawLetter() {
    var numCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numCartaMaquina];
    cartas.splice(numCartaMaquina, 1)

    var numCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numCartaJogador]
    cartas.splice(numCartaJogador, 1)

    document.getElementById('btn-sortear').disabled = true
    document.getElementById('btn-jogar').disabled = false

    acrescerHtml()
}

function acrescerHtml() {
    var estruturaSorteio = document.getElementById('imgCarta')
    var nomeIMGJogador = ''

    //INSERIR IMAGEM DO JOGADOR ESCOLHIDO
    nomeIMGJogador += '<h3> Seu jogador é: ' + cartaJogador.name + '</h3>'
    nomeIMGJogador += `<img src="${cartaJogador.url}">`
    estruturaSorteio.innerHTML = nomeIMGJogador


    var estruturaAtributos = document.getElementById('atrJogador')
    var opçoesAtributos = ""
    for (var atributo in cartaJogador.atributos) {
        //INSERIR ATRIBUTOS DO JOGADOR EM TELA
        opçoesAtributos += `<div class="atributoCentralizado"><input type="radio" name="atributo" value="${atributo}"> ${atributo} ${cartaJogador.atributos[atributo]}<br><br></div>`
        var teste = obtemAtributo()
    }
    estruturaAtributos.innerHTML = opçoesAtributos

}

function obtemAtributo() {
    var radioAtributos = document.getElementsByName('atributo')

    for (var i = 0; i < radioAtributos.length; i++) {

        //SE O ATRIBUTO QUE ESTIVERMOS CONSULTANDO AQUI, ESTIVER MARCADO, FAREMOS...
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value
        }
    }
}

function play() {
    var atributoJogadorSelecionado = obtemAtributo()
    var areaResultado = document.getElementById('resultado')

    if (atributoJogadorSelecionado === undefined) {
        alert('Você não selecionou nenhum atributo. Por favor, selecione um.')
    }
    else if (cartaJogador.atributos[atributoJogadorSelecionado] > cartaMaquina.atributos[atributoJogadorSelecionado]) {

        pontosJogador++
        var resultado = `<h3 style="color: #8dff10;">Parabéns, você GANHOU da carta escolhida pela máquina</h3>
        Jogador da Máquina era: ${cartaMaquina.name}
        <img src="${cartaMaquina.url}"> <br>
        O atributo ${atributoJogadorSelecionado} do ${cartaMaquina.name} é de ${cartaMaquina.atributos[atributoJogadorSelecionado]},
        e o seu atributo ${atributoJogadorSelecionado} é de ${cartaJogador.atributos[atributoJogadorSelecionado]}`

        areaResultado.innerHTML = resultado
    }
    else if (cartaJogador.atributos[atributoJogadorSelecionado] < cartaMaquina.atributos[atributoJogadorSelecionado]) {

        pontosMaquina++
        var resultado = `<h3 style="color: red;">Que pena, você PERDEU da carta escolhida pela máquina</h3>
        Jogador da Máquina era: ${cartaMaquina.name}
        <img src="${cartaMaquina.url}"> <br>
        O atributo ${atributoJogadorSelecionado} do ${cartaMaquina.name} é de ${cartaMaquina.atributos[atributoJogadorSelecionado]},
        e o seu atributo ${atributoJogadorSelecionado} é de ${cartaJogador.atributos[atributoJogadorSelecionado]}`

        areaResultado.innerHTML = resultado
    } else {
        var resultado = `<h3 style="color: #ffeb3b;">Opa, tivemos um EMPATE</h3>
        Jogador da Máquina era: ${cartaMaquina.name}
        <img src="${cartaMaquina.url}"> <br> <br>
        O atributo ${atributoJogadorSelecionado} do ${cartaMaquina.name} é de ${cartaMaquina.atributos[atributoJogadorSelecionado]},
        e o seu atributo ${atributoJogadorSelecionado} é de ${cartaJogador.atributos[atributoJogadorSelecionado]}`

        areaResultado.innerHTML = resultado
    }

    var areaReload = document.getElementById('botoes')
    var btnReload = '<button id="jogarDenovo" onclick="jogarNovamente()">JOGAR PRÓXIMA RODADA</button>'
    btnReload += '<button id="recarregarPagina" onclick="reload()">ENCERRAR JOGO</button>'

    areaReload.innerHTML = btnReload

    document.getElementById('btn-jogar').disabled = true
    atualizaPontos()
}

function reload() {
    document.location.reload(true);
}


if (cartas.length >= 2) {
    jogarNovamente()
}

function jogarNovamente() {
    if (cartas.length >= 2) {
        document.getElementById('jogarDenovo').disabled = true;
        document.getElementById('recarregarPagina').disabled = true;
        document.getElementById('btn-sortear').disabled = false
        document.getElementById('btn-jogar').disabled = true
    }
    else {
        if (pontosJogador > pontosMaquina) {
            alert('Chegamos no fim do jogo. O vencedor foi: VOCÊ')
            reload()
        }
        else if (pontosJogador < pontosMaquina) {
            alert('Chegamos no fim do jogo. O vencedor foi: MÁQUINA')
            reload()
        }
        else {
            alert('Chegamo0s no fim do jogo. Tivemos um EMPATE.')
            reload()
        }
    }
}