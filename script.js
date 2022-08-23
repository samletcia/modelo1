function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora < 12) {
        //bomdia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#7f6700'
    } else if(hora >= 12 && hora < 18) {
        //boatarde
        img.src = 'fototarde.jpg'
    } else {
        img.src = 'fotonoite.jpg'
    }
}

