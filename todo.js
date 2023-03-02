//Arjun-Y-Bhardwaj -- don't copy code, write it yourself :)
let frm = document.querySelector('form')
let lst = document.querySelector('.list')
let count = 0
let islight=0
frm.addEventListener("submit", (e) => {
    if (count == 11) {
        alert("List is full")
        event.preventDefault()
        return false
    }
    e.preventDefault()
    count++
    let work_to_do = document.querySelector(".adding-text").value
    if ((work_to_do).length == 0) {
        alert("Write Something to add")
        event.preventDefault()
        return
    }
    
    let adding_list_item = document.createElement('div')
    adding_list_item.classList.add("list-item")
    
    let adding_thing = document.createElement('div')
    adding_thing.classList.add("thing")
    adding_thing.innerText = work_to_do
    
    let adding_check = document.createElement('img')
    adding_check.classList.add("check")
    adding_check.src = "notdone.svg"
    adding_check.addEventListener("click", () => {
        adding_thing.classList.toggle("strike_text")
        let cur_img_source = adding_check.src.slice(-11)

        if (cur_img_source == "notdone.svg") {
            adding_check.src = "done.svg"
        }
        else {
            adding_check.src = "notdone.svg"
        }
    })
    
    let adding_delete = document.createElement('img')
    adding_delete.classList.add("delete")
    adding_delete.src = (islight==1)?"darkbin.svg":"lightbin.svg"
    
    adding_delete.addEventListener("click", () => {
        lst.removeChild(adding_list_item)
        count--
        //console.log(count)
    })
    
    
    adding_list_item.appendChild(adding_thing)
    adding_list_item.appendChild(adding_check)
    adding_list_item.appendChild(adding_delete)
    lst.appendChild(adding_list_item)
    
    document.querySelector(".adding-text").value = ""
    //console.log(count)
})

let themeloc = document.querySelector(".theme")
themeloc.addEventListener("click", () => {
    let alreadydark = 0
    if (themeloc.src.slice(-8) == "dark.svg") {
        alreadydark = 1
    }
    if (alreadydark) {
        alreadydark=0
        themeloc.src="light.svg"
        islight=1
    }
    else {
        themeloc.src="dark.svg"
        islight=0
    }
    document.body.classList.toggle("new-color")
    document.body.classList.toggle("new-body-bg")
    document.querySelector(".button").classList.toggle("new-body-bg")
    document.querySelector(".list").classList.toggle("new-list-bg")
    document.querySelector(".adding-text").classList.toggle("new-label-color")
    document.querySelector(".list").classList.toggle("new-shadow")
    let deleteloc=document.querySelectorAll(".delete")
    deleteloc.forEach((element)=>{
        if(element.src.slice(-12)=="lightbin.svg"){
            element.src="darkbin.svg"
        }
        else element.src="lightbin.svg"
    })
})

let reset_loc=document.querySelector(".reset")
reset_loc.addEventListener("click",()=>{
    count=0
    let todel=document.querySelectorAll(".list-item")
    todel.forEach((element)=>{
        lst.removeChild(element)
    })
    //console.log(count)
})




