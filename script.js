
const addBtn = document.getElementById('add');
const inputEl = document.getElementById('input-el');
const listItemsEl  = document.getElementById('list-items');
const checkBtn = document.getElementById('check')
const uncheckBtn = document.getElementById('uncheck')
const clearBtn = document.getElementById('clear')
const todoBtn = document.getElementById('todo-btn')

todoBtn.addEventListener('click',(e)=>{
    const liEl = document.getElementsByClassName('item');
    if(e.target.id == "check") {

        Array.from(liEl).forEach((lielement)=>{
            lielement.classList.add("checked")
        })
    }
    else if(e.target.id == "uncheck"){
        Array.from(liEl).forEach((lielement)=>{
            lielement.classList.remove("checked")
        })

    }
    else if(e.target.id == "clear") {
        localStorage.clear()
        render();
    }
    saveData()
})



addBtn.addEventListener('click',()=>{
    if(inputEl.value != null && inputEl.value != "") {
        console.log("Yes it itlfskdn")
        
        // render(mylist);
        listItemsEl.innerHTML += `<li class="item">${inputEl.value}<span>\u00d7</span></li>`
        inputEl.value = "";
    }
    else{
        alert("Please enter something")
    }
    saveData()
})

listItemsEl.addEventListener('click',(e)=>{
    
    if(e.target.tagName == "LI" ) {

        e.target.classList.toggle("checked");
    }
    if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
})


function saveData(){
    localStorage.setItem("data",listItemsEl.innerHTML)
}
function render() {
    listItemsEl.innerHTML = localStorage.getItem("data");
}
render();