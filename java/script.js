let searchBtn = document.querySelector('#search-btn')
let searchForm = document.querySelector('.header .search-form')

searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times')
    searchForm.classList.toggle('active')
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times')
    searchForm.classList.remove('active')
}