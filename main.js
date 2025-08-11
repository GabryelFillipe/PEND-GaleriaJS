'use strict'

const imagens = [
    {
        name: "Ceruled",
        url: './img/ceruled.png'
    },
    {
        name: "Lunala",
        url: './img/lunala.png'
      
    },
    {
        name: "Mega Gengar",
        url: './img/gengarMega.png'
        
    },
    {
        name: "Darkrai",
        url: './img/darkrai.webp'
    },
    {
        name: "Marshadow",
        url: './img/Marshadow.webp'
       
    },
    {
        name: "Annihilape",
        url: './img/annihilape.webp'
        
    },
    {
        name: "Litwick",
        url: './img/litwick.webp'
    },
    {
        name: "Mimikyu",
        url: './img/mimikyu.webp'
    },
    {
        name: "Zorua",
        url: './img/zorua.png'
    }
  
]

function criarImagem(srcImagem){
    const containerDiv = document.createElement('div')

    const galeria = document.getElementById('galeria')
    const imagem  = document.createElement('img')
    imagem.src = srcImagem.url
    
    const text = document.createElement('p')
    text.textContent = srcImagem.name

    galeria.appendChild(containerDiv)
    containerDiv.appendChild(text)
    containerDiv.appendChild(imagem)
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