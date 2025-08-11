'use strict'

const imagens = [
    {
        name: "ceruled",
        url: './img/ceruled.png'
    },
    {
        name: "lunala",
        url: './img/lunala.png'
      
    },
    {
        name: "gengarMega",
        url: './img/gengarMega.png'
        
    },
    {
        name: "darkrai",
        url: './img/darkrai.webp'
    },
    {
        name: "marshadow",
        url: './img/Marshadow.webp'
       
    },
    {
        nome: "annihilape",
        url: './img/annihilape.webp'
        
    },
    {
        name: "litwick",
        url: './img/litwick.webp'
    },
    {
        name: "mimikyu",
        url: './img/mimikyu.webp'
    },
    {
        name: "zorua",
        url: './img/zorua.png'
    }
  
]

function criarImagem(srcImagem){
    const galeria = document.getElementById('galeria')
    const imagem  = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(imagem)
 
}

function carregarImagens(){
   

    
    // let contador = 0
    // const limite = imagens.length - 1
    // while (contador <= limite){
    // const imagem  = document.createElement('img')
    // imagem.src = imagens[contador]
    //  galeria.appendChild(imagem)
    //  contador++
    // }

    imagens.forEach (criarImagem)
    
}

carregarImagens()