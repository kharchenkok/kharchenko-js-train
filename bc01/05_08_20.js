const gallery = document.querySelector('.gallery')

let createHtml = function(numb){

    for(let i=0; i<numb; i+=1){
        let markup = ''
        let numberRandom = Math.round(Math.random()*50)
        markup += `<li class="gallery-item">
        <img src="https://picsum.photos/id/${numberRandom}/200/300" alt="some picture"><button class="gallery-btn">Delete picture</button>
      </li>`
      gallery.insertAdjacentHTML('afterbegin', markup)
      const galleryItem = document.querySelector('.gallery-item')
      galleryItem.addEventListener('click', deletePicture)
    }
}

createHtml(4)

function deletePicture (e){
    if (e.target.nodeName !== 'BUTTON'){
        return
    }
    e.target.parentNode.remove();
}
let showPictuteSrc= function(e){
    if(e.target.nodeName !== 'IMG'){
        return
    }
    alert(e.target.src);
}

gallery.addEventListener('click', showPictuteSrc)

// =========================================================================

// Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
//   Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
//   она находится. Обязательно используйте делегирование событий.


