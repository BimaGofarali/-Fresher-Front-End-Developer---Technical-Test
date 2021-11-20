var exploreMore = document.querySelector(`.explore`)
var detailCarad = document.querySelector(`.detail-card`)

exploreMore.addEventListener(`click`,(e)=>{
    detailCarad.classList.toggle(`explore-more`);
})