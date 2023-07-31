let addButton = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

let oldList = localStorage.getItem("k1")
if (oldList != null && !!oldList){
    let startingArr = JSON.parse(localStorage.getItem("k1"))

    startingArr.forEach(string => {
      let task = document.createElement("li")
      task.textContent = string
      taskList.appendChild(task)
    })
}

addButton.addEventListener("click", (function() { 
  let task = document.createElement("li")
  let inputText = document.getElementById("inputTask")

  task.textContent = inputText.value
  taskList.appendChild(task)
  let contentList = Array.from(taskList.children) 

  let arr = []
  contentList.forEach(element => {
    arr.push(element.textContent)
  })
  console.log(arr)

  localStorage.setItem("k1", JSON.stringify(arr))
}
))

let list = taskList.querySelectorAll('li')
list.forEach(item => {
  item.addEventListener("click", function() {
    if (!item.classList.contains("completed")) {
      item.classList.toggle("completed") 
    } else {
      item.classList.toggle("completed") 
    }
  })
})

let clearButton = document.getElementById("clearBtn")
clearButton.addEventListener("click", (function() {
  taskList.innerHTML = "";
  // localStorage.clear()  
  localStorage.setItem("k1", [])
}))
