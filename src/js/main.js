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


const videos = [
    {
        id: "fXpMiweCC_o",
    },
    {
        id: "YeeHJ3H7GuE",
    },
    {
        id: "Fmdb-KmlzD8",
    },
    {
        id: "lOthvD1rMbQ",
    },
    {
        id: "nXDk86lQhto",
    },
]

const sliderContainer = document.getElementById("slider")
const currentContainer = document.getElementById("current")
const videosContainer = document.getElementById("videos-container")
const bNext = document.getElementById("next")
const bPrev = document.getElementById("prev")
let current = 0
console.log(current)

bNext.addEventListener("click" , e =>{

    let changed = current

    current = current + 1 < videos.length ? current + 1 : current;  
    console.log(current)
    

    if(current != changed){
        renderCurrentVideo(videos[current].id)
    }

})

bPrev.addEventListener("click" , e =>{
    let changed = current

    current = current - 1 >= 0 ? current - 1 : current;  
    console.log(current)
    if(current != changed){
        renderCurrentVideo(videos[current].id)
    }

})

renderCurrentVideo(videos[current].id)
renderVideos();

function renderCurrentVideo(id){
    currentContainer.innerHTML =`<iframe width="100%" height="560" src="https://www.youtube.com/embed/${id}" title="🔥  Sitio Web con HTML y CSS de Halo usando Flex, dark mode y responsive design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

function renderVideos (){
    const html = videos.map( (video, index)=>{
         // 
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src=" https://i.ytimg.com/vi/${video.id}/mqdefault.jpg">
                       
            </a>
        </div>

        
        `

    })
    videosContainer.innerHTML = html.join("")

    document.querySelectorAll(".item a").forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            const id = +item.getAttribute("data-id")
            current = id
            renderCurrentVideo(videos[current].id)

        } )
    })
}