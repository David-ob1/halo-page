const moreOptions = document.getElementById("bmore")
const bShowMobileLinks = document.getElementById("bmenu")
const mobileMenu = document.querySelector(".links")
const moreMenu = document.querySelector(".more .menu")

console.log(bShowMobileLinks)


bShowMobileLinks.addEventListener("click", (e)=>{
    e.preventDefault();

    mobileMenu.classList.toggle("show");
})


moreOptions.addEventListener("click", (e) =>{
    e.preventDefault()

    moreMenu.classList.toggle("show")


})