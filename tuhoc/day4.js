var imagines = document.querySelectorAll('.imagine img')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var close = document.querySelector('.close')
var Img = document.querySelector('.inner img')
var gallery = document.querySelector('.gallery')

var cIndex = 0;

function showGallery(){
    if(cIndex == 0){
        left.classList.add('hide')
    }else{
        left.classList.remove('hide')
    }

    if(cIndex == imagines.length-1){
        right.classList.add('hide')
    }else{
        right.classList.remove('hide')
    }

    Img.src = imagines[cIndex].src
    gallery.classList.add('show')
}

imagines.forEach((item, index)=>{
    item.addEventListener('click', function(){
        cIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

left.addEventListener('click', function(){
    if(cIndex > 0){
        cIndex--
        showGallery()
    }
})

right.addEventListener('click', function(){
    if(cIndex < imagines.length - 1){
        cIndex++
        showGallery()
    }
})

