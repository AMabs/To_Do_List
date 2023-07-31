let addButton = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

addButton.addEventListener("click", (function() { 
  let task = document.createElement("li")
  let inputText = document.getElementById("inputTask")

  if (inputText.value === "") {
    alert("Please enter a task!")
  } else { 
  task.textContent = inputText.value
  taskList.appendChild(task)
  let contentList = Array.from(taskList.children) 

  let arr = []
  contentList.forEach(element => {
    arr.push(element.textContent)
  })
  console.log(arr)

  localStorage.setItem("k1", JSON.stringify(arr))

  task.addEventListener("click", function() {
    if (!task.classList.contains("completed")) {
      task.classList.toggle("completed") 
    } else {
      task.classList.toggle("completed") 
    }
  })
}}
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
  localStorage.clear()  
}))
