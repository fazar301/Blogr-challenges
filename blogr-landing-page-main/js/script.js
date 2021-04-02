const [...btnDrop] = document.querySelectorAll('.btn-drop')
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.items')
const imgEdi = document.querySelectorAll('.editor-image')

if(window.screen.width < 1200){
    imgEdi[0].src = '/images/illustration-editor-mobile.svg'
    imgEdi[1].src = '/images/illustration-laptop-mobile.svg'
}

hamburger.addEventListener('click', function(){
    mobileNav.classList.toggle('itemsActive')
})


btnDrop.map( e => {
    e.addEventListener('click', function(){
        const [...check] = document.querySelectorAll('.btnActive')
        e.classList.toggle('btnActive')
        if(check.length > 0){
            check.map(e => e.classList.remove('btnActive'))
        }
    })
})