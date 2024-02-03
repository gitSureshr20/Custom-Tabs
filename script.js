const tabContainer = document.querySelector(".container");
const tabButton = document.querySelectorAll(".tab-button")
const tabContent = document.querySelectorAll(".content")


tabContainer.addEventListener("click",(e)=>{
    // console.log(e.target.dataset)
    const currentId = e.target.dataset.id;
    console.log(currentId)
    if(currentId){
        tabButton.forEach((btn)=>{
            btn.classList.remove("active");
        })
        e.target.classList.add("active")

        tabContent.forEach((content)=>{
            content.classList.remove("active");
        })
        const currentElement = document.getElementById(currentId);
        currentElement.classList.add("active");
    }
})