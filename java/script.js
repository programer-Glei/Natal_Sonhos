let searchBtn = document.querySelector('#search-btn')
let searchForm = document.querySelector('.header .search-form')

searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times')
    searchForm.classList.toggle('active')
    menuBtn.classList.remove('fa-times')
    navbar.classList.remove('active')
}

let menuBtn = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
    searchBtn.classList.remove('fa-times')
    searchForm.classList.remove('active')
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times')
    searchForm.classList.remove('active')
    menuBtn.classList.remove('fa-times')
    navbar.classList.remove('active')

    if(window.scrollY > 600){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }

    let value = window.scrollY / 10
    paralax.document.querySelector('.home .mountain').style.bottom = `${-value}%`
    paralax.document.querySelector('.home .content').style.bottom = `${-value}%`
    paralax.document.querySelector('.home .moon').style.bottom = `${-value}%`
}