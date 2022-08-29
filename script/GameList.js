/*
const itens = [
    {
        nome: 'STEEP',
        img: 'game/steep.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'Valorant',
        img: 'game/valorant.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'Rainbow Six',
        img: 'game/rainbow.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'GTA V',
        img: 'game/gtav.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'League of Legends',
        img: 'game/lol.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'DOOM',
        img: 'game/doom.png',
        descricao: 'descrição'
    },
    {
        nome: 'Genshin Impact',
        img: 'game/genshin.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'BULLY',
        img: 'game/bully.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'LEGO BATMAN',
        img: 'game/logobatman3.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'Fall Guys',
        img: 'game/fallguys.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'Multiversus',
        img: 'game/multiversus.jpg',
        descricao: 'descrição'
    },
    {
        nome: 'Minecraft',
        img: 'game/minecraft.webp',
        descricao: 'descrição'
    },
]

*OBS: mesma coisa que o método abaixo, mas de outra forma
*/


/*Game Factory*/
class Produto {
    constructor(nome,valor,img,classe) {
        this.nome = nome
        this.valor = valor
        this.img = img
        this.descricao = 'Descrição'
        this.classe = classe
    }
    getAll() {
        return [this.nome, this.img, this.descricao, this.classe, this.valor]
    }
}

let prod1  = new Produto('STEEP'      , 'R$ 2', 'steep.jpg'      , 'cardxyz')
let prod2  = new Produto('Valorant'   , 'R$ 2', 'valorant.jpg'   , 'cardxyz')
let prod3  = new Produto('Rainbow Six', 'Promoção imperdível!!! R$ 0', 'rainbow.jpg'    , 'cardDestaque')
let prod4  = new Produto('GTA V'      , 'R$ 2', 'gtav.jpg'       , 'cardxyz')
let prod5  = new Produto('League of Legends', 'R$ 2', 'lol.jpg'  , 'cardxyz')
let prod6  = new Produto('DOOM'       , 'R$ 2', 'doom.png'       , 'cardxyz')
let prod7  = new Produto('Genshin Imapct',    'R$ 2', 'genshin.jpg' , 'cardxyz')
let prod8  = new Produto('BULLY'      , 'R$ 2', 'bully.jpg'      , 'cardxyz')
let prod9  = new Produto('LEGO BATMAN', 'R$ 2', 'logobatman3.jpg', 'cardxyz')
let prod10 = new Produto('Multiversus', 'R$ 2', 'multiversus.jpg', 'cardxyz')
let prod11 = new Produto('Minecraft'  , 'R$ 2', 'minecraft.webp' , 'cardxyz')

let produtos = []

for(let p = 1; p < 12 ; p++){
    produtos.push(eval(`prod${p}`).getAll())
}

inicializarLoja = () => {
    var GameList = document.getElementById('GameList');
    
    produtos.map( (card) => {
        GameList.innerHTML += `

            <div class="card ${card[3]}" onclick="redirecionaCard()">
                <div style="display: inline;">
                    <div style="background-image: url('game/${card[1]}');" class="card-icon"></div>
                    <div class="buyButton"><h3 class="buyB">${card[0]}</h3></div>
                    <div class="garraX"></div>
                </div>
                <div class="card2">
                    <p>${card[4]},99</p>
                </div>
            </div>
        `
    })
}

inicializarLoja();