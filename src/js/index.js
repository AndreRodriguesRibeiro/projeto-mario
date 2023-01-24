
const botaoTrailer = document.querySelector('.botao-trailer');
const fecharModal =  document.querySelector('.fechar-modal');
const video  = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkdoVideo = video.src ;


function alternarModal(){
    modal.classList.toggle('aberto')
}


botaoTrailer.addEventListener('click',() =>{
    alternarModal();
    video.setAttribute('src', linkdoVideo);
});
 



fecharModal.addEventListener('click' ,() =>{
    alternarModal();
    video.setAttribute('src', ' ');
});






